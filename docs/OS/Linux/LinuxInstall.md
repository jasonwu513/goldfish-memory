+++
# Linux Development Setup Guide

This guide outlines the steps to install and configure various tools and applications for a Linux development environment.

## 1. Install Termius
You can install Termius through the package manager or download it directly from the official website:
[Termius for Linux](https://termius.com/linux)

## 2. Install NVM (Node Version Manager)
Follow the instructions provided here:
[NVM Installation Guide](https://ithelp.ithome.com.tw/articles/10194339)

## 3. Install NVIDIA Driver
For installing the NVIDIA GPU driver, CUDA, and cuDNN on Ubuntu, follow this guide:
[Install NVIDIA GPU Driver on Ubuntu 22.04](https://blog.tarswork.com/post/install-nvidia-gpu-driver-cuda-cudnn-on-ubuntu-2204)

## 4. Install Python 3.11
```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11
```

## 5. Install Go (Golang)
Download the Go binary, extract it, and update the PATH.
```bash
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.23.0.linux-amd64.tar.gz

# Add Go to PATH
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
```

## 6. Install Google Chrome
Go to the following URL to download the `.deb` file and install it:
[Google Chrome Download](https://www.google.com.tw/chrome/browser/desktop/index.html)

## 7. Install Synergy
Download Synergy from the official site:
[Synergy Downloads](https://members.symless.com/synergy/downloads/list/s1)

## 8. Install Docker
```bash
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo docker run hello-world
```

## 9. Backup SSH Key
Make sure to backup your SSH keys regularly.

## 10. Install Visual Studio Code
You can install VS Code via the package manager or download it directly:
[Visual Studio Code Download](https://code.visualstudio.com/)

### VS Code Configuration
Export and import your settings using the guide:
[Export VS Code Settings](https://stackoverflow.com/questions/35368889/how-to-export-settings)

## 11. Install DBeaver
Install DBeaver through the package manager or download it from:
[DBeaver Download](https://dbeaver.io/download/)

## 12. Git Configuration
Configure Git with your preferred settings.

## 13. Install Postman
You can install Postman through the package manager or follow the guide:
[Create Desktop Shortcut for Postman](https://linuxconfig.org/how-to-create-desktop-shortcut-launcher-on-ubuntu-20-04-focal-fossa-linux)
[Postman Installation Guide](https://ithelp.ithome.com.tw/articles/10195738)

## 14. Install Inkscape
```bash
sudo add-apt-repository ppa:inkscape.dev/stable
sudo apt update
sudo apt install inkscape
```

## 15. Install GIMP
```bash
sudo apt-get autoremove gimp gimp-plugin-registry
sudo add-apt-repository ppa:otto-kesselgulasch/gimp
sudo apt-get update
sudo apt-get install gimp
```

## 16. Install Blender
Follow the instructions to install Blender:
[Install Blender on Ubuntu](https://vitux.com/how-to-install-blender-3d-on-ubuntu)

## 17. Install Neovim
Install Neovim and configure it with NVChad or AstroVim:
```bash
sudo apt-get install neovim
```

## 18. Install LazyVim
Follow the instructions on the LazyVim repository to set it up.
[Set up lazyvim on Ubuntu](https://www.lazyvim.org/installation)

## 19. Install Nerd Fonts for LazyVim
```bash
wget -P ~/.local/share/fonts https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/JetBrainsMono.zip \
&& cd ~/.local/share/fonts \
&& unzip JetBrainsMono.zip \
&& rm JetBrainsMono.zip \
&& fc-cache -fv
```

## 20. Install FFmpeg
```bash
sudo apt-get install ffmpeg
```

## 21. Setup git user and email
```bash
git config --global user.name "Your Name"
git config --global user.email "
```


This setup guide provides the necessary steps to configure your Linux development environment with a wide range of tools and applications.

+++