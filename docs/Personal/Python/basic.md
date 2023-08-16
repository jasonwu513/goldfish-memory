
1個py檔就是一個模組, 一個模組可以有多個class, 一個class可以有多個method

套件: 一個資料夾, 裡面有__init__.py, 這個資料夾就是一個套件

PYTHONPATH: 環境變數, 設定套件的路徑
    1. 在cmd中設定
    2. 可以用 print(sys.path) 看 ex: ['/workspaces/python', '/usr/local/lib/python39.zip', '/usr/local/lib/python3.9', '/usr/local/lib/python3.9/lib-dynload', '/usr/local/lib/python3.9/site-packages']
    3. 沒有的話可以用 sys.path.append('路徑') 加入 or    export PYTHONPATH=$PYTHONPATH:/home/xxx/yyy
    4. 在CRONJOB中 要特別注意, 因為吃的設定不同, 所以要特別設定, 不然會找不到路徑

try except: 例外處理, 有錯誤就會跳到except, 沒錯誤就會繼續執行


```python
try:
    # do something
except Exception as e:
    # do something
    error_class = e.__class__.__name__ # 引發錯誤的 class 
    detail = e.args[0] # 得到詳細的訊息 
    cl, exc, tb = sys.exc_info() # 得到錯誤的完整資訊 Call Stack 
    lastCallStack = traceback.extract_tb(tb)[-1] # 取得最後一行的錯誤訊息 
    fileName = lastCallStack[0] # 錯誤的檔案位置名稱 
    lineNum = lastCallStack[1] # 錯誤行數 
    funcName = lastCallStack[2] # function 名稱 
    # generate the error message 
    errMsg = "Exception raise in file: {}, line {}, in {}: [{}] {}. Please contact the member who is the person in charge of project!".format(fileName, lineNum, funcName, error_class, detail)
```

python 3.6 之後的版本, dict 是有順序的, 但是在3.6之前的版本是沒有順序的


logger dictconfig 設定
    1. 用dictconfig設定, 可以設定多個handler, 但是要注意, 如果有設定多個handler, 一定要設定root的handler, 不然會沒有log
    2. 可以參考 https://cloud.tencent.com/developer/article/1772559
    3. 可以參考 https://docs.python.org/3/library/logging.config.html
    4. https://docs.python.org/3/library/logging.config.html
    5. https://docs.python.org/3/library/logging.handlers.html#timedrotatingfilehandler
    6. https://docs.python.org/zh-cn/3.7/library/logging.html
    7. filerotatinghandler: file 不要叫 log.txt rotate 時會發生問題

study.py
```python


#!/usr/bin/env python
# -*- coding:utf-8 -*-


'''
@CreateTime: 2020/12/29 14:08
@Author : shouke
'''

import logging
import logging.config

LOGGING_CONFIG = {
    "version": 1,
    "formatters": {
        "default": {
            'format':'%(asctime)s %(filename)s %(lineno)s %(levelname)s %(message)s',
        },
        "plain": {
            "format": "%(message)s",
        },
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "level": "INFO",
            "formatter": "default",
        },
        "console_plain": {
            "class": "logging.StreamHandler",
            "level":logging.INFO,
            "formatter": "plain"
        },
        "file":{
            "class": "logging.FileHandler",
            "level":20,
            "filename": "./log.log",
            "formatter": "default",
        }
    },
    "loggers": {
        "console_logger": {
            "handlers": ["console"],
            "level": "INFO",
            "propagate": False,
        },
        "console_plain_logger": {
            "handlers": ["console_plain"],
            "level": "DEBUG",
            "propagate": False,
        },
        "file_logger":{
            "handlers": ["file"],
            "level": "INFO",
            "propagate": False,
        }
    },
    "disable_existing_loggers": True,
}


# 測試
logging.config.dictConfig(LOGGING_CONFIG)
logger = logging.getLogger("console_logger")
logger.debug('debug message')
logger.info('info message')
logger.warn('warning message')
logger.error('error message')
logger.critical('critical message')
```

log.py
```python
import os
import sys
import yaml
import traceback
import inspect
import logging
import logging.config
from datetime import datetime as dt


class Logger:

    def __init__(self, log_name = None,  logger=None):
        caller_frame = inspect.stack()[1]
        self.package_name = os.path.relpath(caller_frame.filename)
        self.caller_function_name = caller_frame[3]
        self.check_dir_exist()

        # self.check_dir_exist()
        # self.create_logpath(package_name)

    def check_dir_exist(self):
        # replace package_name \ or / to _
        package_name = self.package_name.replace('\\', '_').replace('/', '_').replace('.py', '')
        print(package_name)
        print(self.caller_function_name)

        self.create_logpath(package_name)

    def create_logpath(self, package_name):
        # create log folder if not exist
        if not os.path.exists('log'):
            os.mkdir('log')
        # create log module folder if not exist
        if not os.path.exists('log/' + package_name):
            open('log/' + package_name + '.log', 'a').close()

    def generate_log(self, logger = 'time_rotating_file_logger'):
        LOGGING_CONFIG = {
            "version": 1,
            "formatters": {
                "default": {
                    'format':'%(asctime)s %(filename)s %(lineno)s %(levelname)s %(message)s',
                },
                "plain": {
                    "format": "%(message)s",
                },
            },
            "handlers": {
                "console": {
                    "class": "logging.StreamHandler",
                    "level": "DEBUG",
                    "formatter": "default",
                },
                "console_plain": {
                    "class": "logging.StreamHandler",
                    "level": "DEBUG",
                    "formatter": "plain"
                },
                "file":{
                    "class": "logging.FileHandler",
                    "level":20,
                    "filename": "./log.txt",
                    "formatter": "default",
                },
                "time_rotating_file": {
                    "class": "logging.handlers.TimedRotatingFileHandler",
                    "level": "DEBUG",
                    "formatter": "default",
                    "filename": "./a.log",
                    "when": "D",
                    "interval": 1,
                    "backupCount": 7,
                }
            },
            "loggers": {
                "console_logger": {
                    "handlers": ["console"],
                    "level": "DEBUG",
                    "propagate": False,
                },
                "console_plain_logger": {
                    "handlers": ["console_plain"],
                    "level": "DEBUG",
                    "propagate": False,
                },
                "file_logger":{
                    "handlers": ["file", "console"],
                    "level": "INFO",
                    "propagate": False,
                },
                "time_rotating_file_logger": {
                    "handlers": ["time_rotating_file", "console"],
                    "level": "DEBUG",
                    "propagate": False,
                }
            },
            "disable_existing_loggers": True,
        }

        logging.config.dictConfig(LOGGING_CONFIG)
        return logging.getLogger(logger)
```


main.py
```python
import sys
sys.path.append("C:\\Users\\NC22015\\projects\\playwright\\python")
from utils.log import Logger

def main():
    logger = Logger('test')
    logger.print_log()

def funcA():
    logger = Logger('test')
    log = logger.generate_log()
    log.info('test dudududu dadada')
if __name__ == '__main__':
    funcA()
```

``` python
    try:
        etc_home = os.getenv('ETC_HOME')
        metric_file = os.path.join(etc_home, 'metrics_meta', '{}.yaml'.format(metric))

        with open(metric_file) as fp:
            metric_meta = yaml.safe_load(fp)

        metric_meta = config[0]['log_home']['log_file']
```


呼叫dict value

```python
r = {'date_list' :date_list,'qty_list': qty_list}
print(r.get('date_list'))
```


```
def f(x) -> int: 返回註解
    return x
```