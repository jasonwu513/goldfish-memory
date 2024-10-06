"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[8939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=g(t),f=l,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||r;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var g=2;g<r;g++)o[g]=t[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=t(87462),l=(t(67294),t(3905));const r={},o=void 0,i={unversionedId:"Software/Language/Python/basic",id:"Software/Language/Python/basic",title:"basic",description:"1\u500bpy\u6a94\u5c31\u662f\u4e00\u500b\u6a21\u7d44, \u4e00\u500b\u6a21\u7d44\u53ef\u4ee5\u6709\u591a\u500bclass, \u4e00\u500bclass\u53ef\u4ee5\u6709\u591a\u500bmethod",source:"@site/docs/Software/Language/Python/basic.md",sourceDirName:"Software/Language/Python",slug:"/Software/Language/Python/basic",permalink:"/docs/Software/Language/Python/basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Language/Python/basic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u96b1\u85cf\u6aa2\u67e5\u7528\u7684Consle.log",permalink:"/docs/Software/Language/Javascript/quickCommetConsoleLog"},next:{title:"Design Pattern",permalink:"/docs/Software/Language/Python/designPattern"}},s={},g=[],c={toc:g};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"1\u500bpy\u6a94\u5c31\u662f\u4e00\u500b\u6a21\u7d44, \u4e00\u500b\u6a21\u7d44\u53ef\u4ee5\u6709\u591a\u500bclass, \u4e00\u500bclass\u53ef\u4ee5\u6709\u591a\u500bmethod"),(0,l.kt)("p",null,"\u5957\u4ef6: \u4e00\u500b\u8cc7\u6599\u593e, \u88e1\u9762\u6709",(0,l.kt)("strong",{parentName:"p"},"init"),".py, \u9019\u500b\u8cc7\u6599\u593e\u5c31\u662f\u4e00\u500b\u5957\u4ef6"),(0,l.kt)("p",null,"PYTHONPATH: \u74b0\u5883\u8b8a\u6578, \u8a2d\u5b9a\u5957\u4ef6\u7684\u8def\u5f91"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. \u5728cmd\u4e2d\u8a2d\u5b9a\n2. \u53ef\u4ee5\u7528 print(sys.path) \u770b ex: ['/workspaces/python', '/usr/local/lib/python39.zip', '/usr/local/lib/python3.9', '/usr/local/lib/python3.9/lib-dynload', '/usr/local/lib/python3.9/site-packages']\n3. \u6c92\u6709\u7684\u8a71\u53ef\u4ee5\u7528 sys.path.append('\u8def\u5f91') \u52a0\u5165 or    export PYTHONPATH=$PYTHONPATH:/home/xxx/yyy\n4. \u5728CRONJOB\u4e2d \u8981\u7279\u5225\u6ce8\u610f, \u56e0\u70ba\u5403\u7684\u8a2d\u5b9a\u4e0d\u540c, \u6240\u4ee5\u8981\u7279\u5225\u8a2d\u5b9a, \u4e0d\u7136\u6703\u627e\u4e0d\u5230\u8def\u5f91\n")),(0,l.kt)("p",null,"try except: \u4f8b\u5916\u8655\u7406, \u6709\u932f\u8aa4\u5c31\u6703\u8df3\u5230except, \u6c92\u932f\u8aa4\u5c31\u6703\u7e7c\u7e8c\u57f7\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'try:\n    # do something\nexcept Exception as e:\n    # do something\n    error_class = e.__class__.__name__ # \u5f15\u767c\u932f\u8aa4\u7684 class \n    detail = e.args[0] # \u5f97\u5230\u8a73\u7d30\u7684\u8a0a\u606f \n    cl, exc, tb = sys.exc_info() # \u5f97\u5230\u932f\u8aa4\u7684\u5b8c\u6574\u8cc7\u8a0a Call Stack \n    lastCallStack = traceback.extract_tb(tb)[-1] # \u53d6\u5f97\u6700\u5f8c\u4e00\u884c\u7684\u932f\u8aa4\u8a0a\u606f \n    fileName = lastCallStack[0] # \u932f\u8aa4\u7684\u6a94\u6848\u4f4d\u7f6e\u540d\u7a31 \n    lineNum = lastCallStack[1] # \u932f\u8aa4\u884c\u6578 \n    funcName = lastCallStack[2] # function \u540d\u7a31 \n    # generate the error message \n    errMsg = "Exception raise in file: {}, line {}, in {}: [{}] {}. Please contact the member who is the person in charge of project!".format(fileName, lineNum, funcName, error_class, detail)\n')),(0,l.kt)("p",null,"python 3.6 \u4e4b\u5f8c\u7684\u7248\u672c, dict \u662f\u6709\u9806\u5e8f\u7684, \u4f46\u662f\u57283.6\u4e4b\u524d\u7684\u7248\u672c\u662f\u6c92\u6709\u9806\u5e8f\u7684"),(0,l.kt)("p",null,"logger dictconfig \u8a2d\u5b9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. \u7528dictconfig\u8a2d\u5b9a, \u53ef\u4ee5\u8a2d\u5b9a\u591a\u500bhandler, \u4f46\u662f\u8981\u6ce8\u610f, \u5982\u679c\u6709\u8a2d\u5b9a\u591a\u500bhandler, \u4e00\u5b9a\u8981\u8a2d\u5b9aroot\u7684handler, \u4e0d\u7136\u6703\u6c92\u6709log\n2. \u53ef\u4ee5\u53c3\u8003 https://cloud.tencent.com/developer/article/1772559\n3. \u53ef\u4ee5\u53c3\u8003 https://docs.python.org/3/library/logging.config.html\n4. https://docs.python.org/3/library/logging.config.html\n5. https://docs.python.org/3/library/logging.handlers.html#timedrotatingfilehandler\n6. https://docs.python.org/zh-cn/3.7/library/logging.html\n7. filerotatinghandler: file \u4e0d\u8981\u53eb log.txt rotate \u6642\u6703\u767c\u751f\u554f\u984c\n")),(0,l.kt)("p",null,"study.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\n\n#!/usr/bin/env python\n# -*- coding:utf-8 -*-\n\n\n\'\'\'\n@CreateTime: 2020/12/29 14:08\n@Author : shouke\n\'\'\'\n\nimport logging\nimport logging.config\n\nLOGGING_CONFIG = {\n    "version": 1,\n    "formatters": {\n        "default": {\n            \'format\':\'%(asctime)s %(filename)s %(lineno)s %(levelname)s %(message)s\',\n        },\n        "plain": {\n            "format": "%(message)s",\n        },\n    },\n    "handlers": {\n        "console": {\n            "class": "logging.StreamHandler",\n            "level": "INFO",\n            "formatter": "default",\n        },\n        "console_plain": {\n            "class": "logging.StreamHandler",\n            "level":logging.INFO,\n            "formatter": "plain"\n        },\n        "file":{\n            "class": "logging.FileHandler",\n            "level":20,\n            "filename": "./log.log",\n            "formatter": "default",\n        }\n    },\n    "loggers": {\n        "console_logger": {\n            "handlers": ["console"],\n            "level": "INFO",\n            "propagate": False,\n        },\n        "console_plain_logger": {\n            "handlers": ["console_plain"],\n            "level": "DEBUG",\n            "propagate": False,\n        },\n        "file_logger":{\n            "handlers": ["file"],\n            "level": "INFO",\n            "propagate": False,\n        }\n    },\n    "disable_existing_loggers": True,\n}\n\n\n# \u6e2c\u8a66\nlogging.config.dictConfig(LOGGING_CONFIG)\nlogger = logging.getLogger("console_logger")\nlogger.debug(\'debug message\')\nlogger.info(\'info message\')\nlogger.warn(\'warning message\')\nlogger.error(\'error message\')\nlogger.critical(\'critical message\')\n')),(0,l.kt)("p",null,"log.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport sys\nimport yaml\nimport traceback\nimport inspect\nimport logging\nimport logging.config\nfrom datetime import datetime as dt\n\n\nclass Logger:\n\n    def __init__(self, log_name = None,  logger=None):\n        caller_frame = inspect.stack()[1]\n        self.package_name = os.path.relpath(caller_frame.filename)\n        self.caller_function_name = caller_frame[3]\n        self.check_dir_exist()\n\n        # self.check_dir_exist()\n        # self.create_logpath(package_name)\n\n    def check_dir_exist(self):\n        # replace package_name \\ or / to _\n        package_name = self.package_name.replace(\'\\\\\', \'_\').replace(\'/\', \'_\').replace(\'.py\', \'\')\n        print(package_name)\n        print(self.caller_function_name)\n\n        self.create_logpath(package_name)\n\n    def create_logpath(self, package_name):\n        # create log folder if not exist\n        if not os.path.exists(\'log\'):\n            os.mkdir(\'log\')\n        # create log module folder if not exist\n        if not os.path.exists(\'log/\' + package_name):\n            open(\'log/\' + package_name + \'.log\', \'a\').close()\n\n    def generate_log(self, logger = \'time_rotating_file_logger\'):\n        LOGGING_CONFIG = {\n            "version": 1,\n            "formatters": {\n                "default": {\n                    \'format\':\'%(asctime)s %(filename)s %(lineno)s %(levelname)s %(message)s\',\n                },\n                "plain": {\n                    "format": "%(message)s",\n                },\n            },\n            "handlers": {\n                "console": {\n                    "class": "logging.StreamHandler",\n                    "level": "DEBUG",\n                    "formatter": "default",\n                },\n                "console_plain": {\n                    "class": "logging.StreamHandler",\n                    "level": "DEBUG",\n                    "formatter": "plain"\n                },\n                "file":{\n                    "class": "logging.FileHandler",\n                    "level":20,\n                    "filename": "./log.txt",\n                    "formatter": "default",\n                },\n                "time_rotating_file": {\n                    "class": "logging.handlers.TimedRotatingFileHandler",\n                    "level": "DEBUG",\n                    "formatter": "default",\n                    "filename": "./a.log",\n                    "when": "D",\n                    "interval": 1,\n                    "backupCount": 7,\n                }\n            },\n            "loggers": {\n                "console_logger": {\n                    "handlers": ["console"],\n                    "level": "DEBUG",\n                    "propagate": False,\n                },\n                "console_plain_logger": {\n                    "handlers": ["console_plain"],\n                    "level": "DEBUG",\n                    "propagate": False,\n                },\n                "file_logger":{\n                    "handlers": ["file", "console"],\n                    "level": "INFO",\n                    "propagate": False,\n                },\n                "time_rotating_file_logger": {\n                    "handlers": ["time_rotating_file", "console"],\n                    "level": "DEBUG",\n                    "propagate": False,\n                }\n            },\n            "disable_existing_loggers": True,\n        }\n\n        logging.config.dictConfig(LOGGING_CONFIG)\n        return logging.getLogger(logger)\n')),(0,l.kt)("p",null,"main.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nsys.path.append(\"C:\\\\Users\\\\NC22015\\\\projects\\\\playwright\\\\python\")\nfrom utils.log import Logger\n\ndef main():\n    logger = Logger('test')\n    logger.print_log()\n\ndef funcA():\n    logger = Logger('test')\n    log = logger.generate_log()\n    log.info('test dudududu dadada')\nif __name__ == '__main__':\n    funcA()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    try:\n        etc_home = os.getenv('ETC_HOME')\n        metric_file = os.path.join(etc_home, 'metrics_meta', '{}.yaml'.format(metric))\n\n        with open(metric_file) as fp:\n            metric_meta = yaml.safe_load(fp)\n\n        metric_meta = config[0]['log_home']['log_file']\n")),(0,l.kt)("p",null,"\u547c\u53ebdict value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"r = {'date_list' :date_list,'qty_list': qty_list}\nprint(r.get('date_list'))\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"def f(x) -> int: \u8fd4\u56de\u8a3b\u89e3\n    return x\n")))}p.isMDXComponent=!0}}]);