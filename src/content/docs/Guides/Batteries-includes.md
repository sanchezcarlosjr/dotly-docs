---
title: Batteries includes
description: A guide to dot command
---

- ## dot command
    - Running `dot` will display all available global scripts
        ```bash
        {▸} ~ dot
        output:
            > docker connect                  │                               │
              dotfiles create                 │ Usage:                        │
              dotfiles import                 │   connect                     │
              git amend                       │                               │
        ```
        - Personal scripts should be located in `<DOTFILES_PATH>/scripts`
        - Opinionated scripts are located `<DOTFILES_PATH>/modules/dotly/scripts`
    - Most useful dot scripts
        - symlinks apply: Applies all your new/updated symlinks
        - mac defaults: With this script you can import/export all your current Mac settings. After you run the import script, you'll need 
                        to restart your machine.
        - Press `<Ctrl-c>` once/twice to quit `dot`
- ## Updating dotly
   - git submodule update --init --recursive modules/dotly
- ## Shortcuts
   - If you press `<Ctrl-r>`, you'll get a custom reverse-search UI
   ```bash
   > __
     1520/1520 +S ───────────────────────────────────────────────────
   >  1542  dot                                                      │
      1541  la modules/dotly/dotfiles_template
      1540  git submodule update --init --recursive modules/dotly
      1539  dotly self-update --help
      1538  dotly self-update
      1537  dotly
   ```
- ## Opinionated dotfiles template
    - By default dotly came with a default template ready to use
      ```bash
      ├── 📁 bin                 # External binaries/symlinks. This folder has preference in your $PATH
      ├── 📁 doc                 # Documentation of your dotfiles
      ├── 📁 editors             # Settings of your editors (vscode, IDEA, …)
      ├── 📁 git                 # git config
      ├── 📁 langs               # Config for programming languages/libraries
      ├── 📁 os                  # Specific config of your Operative System or apps
      ├── 📁 restoration_scripts # This will be execute when you restore your dotfiles in another computer/installation
      ├── 📁 scripts             # Your custom scripts
      ├── 📁 shell               # Bash/Zsh/Fish?… configuration files
      └── 📁 symlinks            # The config of your symlinks
      ```
      this does not mean that you can not modify this defaults, you can create/erase/rename everything. Just remember that you need to 
      update your symlinks in case you need it.

## 📽️ Feature showcase (Spanish)

For an in-depth look at the features offered by dotly, you can take a look at [this video](https://www.youtube.com/watch?v=kCBvPb8qAAE):

[![Watch the video](https://img.youtube.com/vi/kCBvPb8qAAE/maxresdefault.jpg)](https://youtu.be/kCBvPb8qAAE)