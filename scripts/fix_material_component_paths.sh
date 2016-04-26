#!/bin/bash

for file in `find material2/src/components -name '*.ts'` ; do
  sed -i -e "s/'\.\/components\//\'material2\/src\/components\//g" $file
  sed -i -e "s/'components\//\'material2\/src\/components\//g" $file
done
