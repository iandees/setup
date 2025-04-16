# setup
Notes and information from setting up my laptop.

## Things I usually do

### macOS Preferences and Settings
1. In Keyboard preferences:
    1. Decrease key repeat delay and increase repeat rate in Keyboard preferences
    1. Set "Touch Bar shows" to "Expanded Control Strip"
    1. Customize Control Strip and remove Siri, media controls, etc. to make space on the left where my fingers sometimes rest at the top of the keyboard
    1. Disable Dictation + dictation shortcut
    1. Input Source > Edit…, disable all options and switch smart quotes to straight ones
1. In Dock preferences:
    1. Automatically hide and show the Dock
    1. Disable Show recent applications
1. In General preferences:
    1. Switch to Dark mode
1. In Date & Time preferences:
    1. Show seconds, use 24-hour, show date
1. In Security & Privacy preferences:
    1. Enable location services
    1. Disable access for Apple Ads and HomeKit, enable showing location menu icon
1. [Enable disk encryption](https://support.apple.com/en-us/HT204837), [Require password on wake](https://support.apple.com/kb/PH25376?locale=en_US)
1. Set some defaults via terminal:
   ```
   chflags nohidden ~/Library
   defaults write com.apple.finder AppleShowAllFiles YES
   ```

### Install these

1. [Install Homebrew](https://brew.sh/) (run `brew analytics off` after)
1. [Install oh-my-zsh](http://ohmyz.sh/)
1. Install my [Brewfile](https://github.com/iandees/setup/blob/master/Brewfile) (`brew bundle install`)
1. [Generate new SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) and [add it to GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
1. Install [Finicky](https://github.com/johnste/finicky) (`brew install finicky`) and customize the configuration in this repo
1. Install [atuin](https://atuin.sh/) and login
1. Update SynologyDrive to ignore `node_modules` and `.venv` directories. See [this reddit thread](https://www.reddit.com/r/synology/comments/zao71q/best_way_to_work_around_node_modules_with/).

## Further reading

- [iTerm Keybindings](https://coderwall.com/p/dapstw/keybindings-for-macosx-users-on-iterm2)
- [Dale Kunce Mac + GIS Setup](https://gist.github.com/dalekunce/0e6f7bfe8445ff3cc3dc)
- [macOS Setup Gitbook](http://sourabhbajaj.com/mac-setup/)
- [Setting up a Mac for (frontend) development](https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/)
- [Keybase + PGP signing git/GitHub commits](https://github.com/pstadler/keybase-gpg-github)
