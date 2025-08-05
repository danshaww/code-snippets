# For directory in directory loop example
for dir in /docker/*; do (cd "$dir" && docker compose down && docker compose up -d); done

for dir in /docker/apps/*; do (cd "$dir" && docker compose down && docker compose up -d); done

# Loop using output from another command:
for i in $(docker compose ls -q); do (echo $i); done