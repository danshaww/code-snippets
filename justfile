#!/usr/bin/env just --justfile
# Display All Just Commands
default:
    just --list
# Deploy WSL Config
wsl: 
    ansible-playbook ./ansible/playbooks/wsl.yaml

create-dan:
    "./linux/Create Dan User.sh"