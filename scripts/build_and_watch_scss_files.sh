#!/bin/bash
#
# Adhoc *.scss (re)compilation / watching.
#
set -u

readonly sassc_args=(
  -m
  -I material2/src/core/style
)

readonly folders=(
  material2/src/components
  app
)

function list_files() {
  for folder in "${folders[@]}" ; do
    find "$folder" -name '*.scss' | egrep -v '/_[^.]*\.scss'
  done
}

last_list=""
while true
do
  files=`list_files`
  list=`ls -l $files`
  if [[ "$list" != "$last_list" ]]; then
    last_list="$list"
    for file in $files ; do
      css_file="${file%.scss}.css"
      sassc "${sassc_args[@]}" "$file" "$css_file"
      ./node_modules/postcss-cli/bin/postcss --use autoprefixer -o "$css_file" "$css_file"
    done
    echo "*** Compiled SCSS files."
  fi
  sleep 1
done
