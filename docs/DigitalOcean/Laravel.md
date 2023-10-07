1. 在Market store 選擇 Laravel Framework
2. 在取得IP後 將Domain 指向IP 讓cerbot 可以正常運行
3. 運行指令讓cerbot定期更新
SLEEPTIME=$(awk 'BEGIN{srand(); print int(rand()*(3600+1))}'); echo "0 0,12 * * * root sleep $SLEEPTIME && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
5. 

218.161.53.136
sudo ufw allow from 218.161.53.136 to any port 80
sudo ufw allow from 218.161.53.136 to any port 443

後來發現這樣let's encrypt 就無法認證了...

不知道為什麼 port 3306 開給了 IP 78.154.13.133  

ufw status numbered
![](https://i.imgur.com/2eKZMHp.png)

不能用下列方法刪除 應為後面排序就變了..
ufw delete 1 &&
ufw delete 2 &&
ufw delete 3 &&
ufw delete 5 &&
ufw delete 6 &&
ufw delete 7 &&
ufw delete 9
ufw delete 1





https://eff-certbot.readthedocs.io/en/stable/using.html#setting-up-automated-renewal