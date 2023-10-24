# log zap 設定流程

## generate core

生成一個 logger

```go
Core := zapcore.NewCore(encoder, mainWriter, logLevel)
//  

Logger = zap.New(core, zap.AddCaller(), zap.AddCallerSkip(1))
```

每個 zapcore.Core 實例都代表了一個日誌寫入管道
要生成一個 logger core， 有三個要素

1. level
2. encoder
3. writer (output)

### level

level 從最低到最高分別是

1. Debug
2. Info
3. Warn
4. Error
5. DPanic
6. Panic
7. Fatal

可以直接用 

EmailLevel := zapcore.ErrorLevel 

或是 

var logLevel zapcore.Level
if err := logLevel.UnmarshalText([]byte(logLevelString)); err != nil {
    panic(err)
}

設定log level


### encoder

```go
func getEncoder() zapcore.Encoder {
	encoderConfig := zapcore.EncoderConfig{
		TimeKey:        "time",
		LevelKey:       "level",
		NameKey:        "logger",
		CallerKey:      "caller",
		FunctionKey:    zapcore.OmitKey,
		MessageKey:     "message",
		StacktraceKey:  "stacktrace",
		LineEnding:     zapcore.DefaultLineEnding,      // 範例 : \n
		EncodeLevel:    zapcore.CapitalLevelEncoder,    // 範例 : INFO
		EncodeTime:     zapcore.RFC3339TimeEncoder,     // 範例 : 2021-08-31T15:00:00+08:00
		EncodeDuration: zapcore.SecondsDurationEncoder, // 範例 : 0.000000
		EncodeCaller:   zapcore.ShortCallerEncoder,     // 範例 : main.go:14
	}
	// encoderConfig.EncodeTime = zapcore.RFC3339TimeEncoder
	// encoderConfig.EncodeLevel = zapcore.CapitalLevelEncoder
	return zapcore.NewJSONEncoder(encoderConfig)
}

// SecondsDurationEncoder 使用範例

start := time.Now()
// 假設這裡是執行任務的代碼
duration := time.Since(start)
logger.Info("Task completed", zap.Duration("duration", duration))

```

### writer

writer 的作用是將 log 寫入到指定的地方

ex : 寫到console.log

```go

mainWriter := getLogWriter(config.Get("log.logDir"))

func getLogWriter(logPath string) zapcore.WriteSyncer {
	lumberjackLogger := &lumberjack.Logger{
		Filename:   logPath,
		MaxSize:    config.GetInt("log.logMaxSize"), // megabytes
		MaxBackups: config.GetInt("log.logMaxBackups"),
		MaxAge:     config.GetInt("log.logMaxAge"), // days
		Compress:   true,
	}

	// MultiWriteSyncer will write logs to both the console and the file
	return zapcore.NewMultiWriteSyncer(
		zapcore.AddSync(os.Stdout),
		zapcore.AddSync(lumberjackLogger),
	)
}

// 客製化 writer


	EmailCore := zapcore.NewCore(
		encoder,
		&EmailWriteSyncer{},
		EmailLevel,
	)



type CustomLogger struct {
	*zap.Logger
}

// 新的LogIf方法
func (l *CustomLogger) LogIf(err error) {
	if err != nil {
		l.Error("Error Occurred:", zap.Error(err))
	}
}

// NewCustomLoggerFactory 創建一個新的CustomLogger實例
func NewCustomLoggerFactory(z *zap.Logger) *CustomLogger {
	return &CustomLogger{z}
}

var Logger *zap.Logger
var AccessLogger *zap.Logger
var NewCustomLogger *CustomLogger

type EmailWriteSyncer struct{}

func (e *EmailWriteSyncer) Write(p []byte) (n int, err error) {
	subject := "ERP SYSTEM Error Log Message" // Email 主旨
	body := string(p)

	_, sendErr := e.sendEmail(subject, body)
	if sendErr != nil {
		fmt.Println("Failed to send email:", sendErr)
	}

	return len(p), nil
}

func (e *EmailWriteSyncer) Sync() error {
	return nil // 沒有同步/刷新的需求
}

func (e *EmailWriteSyncer) sendEmail(

    subject string,
    body string,
) (bool, error) {
    // 這裡是寄信的代碼
    return true, nil
}

```




## generate logger

生成一個 logger

```go
Logger = zap.New(core, zap.AddCaller(), zap.AddCallerSkip(1))
```

如果有多個 core 可以用 TEE 來合併

```go
// TEE 會將 log 寫入到兩個 core
Logger = zap.New(zapcore.NewTee(core, EmailCore), zap.AddCaller(), zap.AddCallerSkip(1))
```
