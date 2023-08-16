import Adafruit_DHT
import time
from datetime import datetime
import redis
# just simple code for dht22

DHT_SENSOR = Adafruit_DHT.DHT22
DHT_PIN = 4
humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)

def DHT22():
  try:
    humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
    r = redis.Redis(host='localhost', port=6379, decode_responses=True)
    temp = format(temperature,'0.2f')
    hum = format(humidity,'0.2f')
    now = datetime.now()
    s = datetime.strftime(now,'%Y-%m-%d %H:%M:%S')
    # unixtime = r.time()
    # unixtime1 = unixtime[0]
    # unixtime1 = int(unixtime1)
    # x = datetime.utcfromtimestamp(unixtime1).strftime('%Y-%m-%d %H:%M:%S')
    r.set('A_0',temp +','+ s)
    r.set('A_1',hum +','+ s)
    r.set('P6_0',hum +','+ s)
    print(r['A_0'])
    print(r['A_1'])
  except Exception as e:
    print(str(e))


def do_every(period,f):
    def g_tick():
        t = time.time()
        while True:
            t += period
            yield max(t - time.time(),0)
    g = g_tick()
    while True:
        time.sleep(g.next())
        f()

while True:
    do_every(5, DHT22)