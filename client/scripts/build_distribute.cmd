cd ../shoshi-san-client
del /Q ..\..\server\src\main\resources\public\*.js
del /Q ..\..\server\src\main\resources\public\*.ico
del /Q ..\..\server\src\main\resources\public\*.html
del /Q ..\..\server\src\main\resources\public\*.css
REM build web client
call ng build --verbose
REM copy build result to server
copy /Y dist\shoshi-san-client\browser\*.* ..\..\server\src\main\resources\public
echo "Done"