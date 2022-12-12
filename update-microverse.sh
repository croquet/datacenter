#!/bin/sh
cd `dirname $0`

MICROVERSE=${1}
if [ -z ${MICROVERSE} ]
then
    echo "specify the microverse repo dir"
    exit 1;
fi

# build microverse lib

(cd ${MICROVERSE} && npm run build-lib)

# copy it here

HERE=`pwd`
(cd ${MICROVERSE}/dist && INIT_CWD=$HERE node install.js)

# # fix it up

# INDEX=`echo lib/index*.js`
# echo $INDEX

# sed -i .tmp 's%lib/index.*.js%'${INDEX}'%' v1.js
# rm v1.js.tmp

# rm -rf index.html worlds/ assets/avatars/ apiKey.js-example

