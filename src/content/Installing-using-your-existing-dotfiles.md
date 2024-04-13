# 🚀 Installation

## 📋 Restore options

### With wget:

```bash
bash <(wget -qO- https://raw.githubusercontent.com/CodelyTV/dotly/HEAD/restorer)
```

### With curl:

```bash
bash <(curl -s https://raw.githubusercontent.com/CodelyTV/dotly/HEAD/restorer)
```

## Manually

* Install git
* Clone your dotfiles repository `git clone [your repository of dotfiles] $WHERE_YOU_WANT_TO_PLACE_THEM`
* Go to your dotfiles folder `cd $WHERE_YOU_PLACED_THEM`
* Install git submodules `git submodule update --init --recursive modules/dotly`
* Install your dotfiles `DOTFILES_PATH="$WHERE_YOU_PLACED_THEM" DOTLY_PATH="$DOTFILES_PATH/modules/dotly" "$DOTLY_PATH/bin/dot" self install`
* Restart your terminal
* Import your packages `dot package import`

## 😬 Important notes
### During the installation
- **Where are going to be located your dotfiles?**
1. press `Enter` if you ok with the default location (`~/.dotfiles`)
2. if you want a custom location, the path should include the name of your new dotfiles folder (ex.
`~/Documents/workspace/<folder_name>`), **you don't need to create it manually, if you do that, you'll get a .back folder of your 
empty folder**
- **Selecting authentication method**
if you are going to clone your repo using the **Other git alternative**, before this, you need to create an ssh key and it to your 
github account. For more information check this [docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)