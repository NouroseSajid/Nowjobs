@echo off 
psexec -s -i 1 "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -NoExit -Command "npx react-native run-android"
