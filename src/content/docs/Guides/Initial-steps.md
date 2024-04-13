---
title: Getting started
description: Installation
---

# 🚀 Installation

## 🏠 Production installation

### Using wget:

```bash
bash <(wget -qO- https://raw.githubusercontent.com/CodelyTV/dotly/HEAD/installer)
```

### Or using curl:

```bash
bash <(curl -s https://raw.githubusercontent.com/CodelyTV/dotly/HEAD/installer)
```

## 🐳 Try it in Docker

You can safely install additional software and make any changes to the file system. Once you exit zsh the image is
deleted.

- ### Using Alpine:
> ```bash
> docker run -e TERM -e COLORTERM -e LC_ALL=C.UTF-8 -w /root -it --rm alpine sh -uec '
>  apk add curl sudo bash zsh git g++ python3
>  bash -c "$(curl -fsSL https://raw.githubusercontent.com/CodelyTV/dotly/HEAD/installer)"
>  zsh'
> ```

***

- ### Using Ubuntu:
> ```bash
> docker run -e TERM -e COLORTERM -w /root -it --rm ubuntu sh -uec '
>  apt-get update
>  apt-get install -y curl build-essential sudo
>  su -c bash -c "$(curl -fsSL https://raw.githubusercontent.com/CodelyTV/dotly/HEAD/installer)"
>  su -c zsh'
> ```

## 😬 Important notes
### During the installation
**where are going to be located your dotfiles?**
1. press `Enter` if you ok with the default location (`~/.dotfiles`)
2. if you want a custom location, the path should include the name of your new dotfiles folder (ex. `~/Documents/workspace/<folder_name>`), **you don't need to create it manually, if you do that, you'll get a .back folder of your empty folder**