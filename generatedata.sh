COUNTER=20
until [  $COUNTER -lt 0 ]; do
    let GEN_VAL=$((RANDOM&180))
    echo $GEN_VAL
    curl localhost:1337/Yaw/create?value=$GEN_VAL
	let COUNTER-=1
done