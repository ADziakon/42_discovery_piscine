if [ $# -eq 0 ]
then
echo ¨no parameters found¨
exit 1
fi
for forlder_name in $@; do
mkdir -p ex${forlder_name}
done
