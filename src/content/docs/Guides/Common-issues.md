---
title: Common issues
description: General troubleshooting
---

## Zimfw is not working after restore my dotfiles
1. Delete shell/zsh/.zim 
2. Run 
```
DOTFILES_PATH="<REPLACE_WITH_YOUR_DOTFILES_PATH>" DOTLY_PATH="$DOTFILES_PATH/modules/dotly" "$DOTLY_PATH/bin/dot" self install
```
3. Restart your terminal