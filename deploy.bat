@echo off
REM Déployer un projet Angular sur GitHub Pages

REM Dossier contenant le projet Angular
SET PROJECT_DIR=C:\Users\Nano\Desktop\AngularProject\abdelAzizPrime\

REM Nom de ton dépôt GitHub (ex : ton-user/ton-repo)
SET REPO=gyglamesh34/abdelAzizPrime

REM Nom du dossier de sortie après le build Angular
SET DIST_DIR=dist

REM Aller dans le dossier du projet
cd %PROJECT_DIR%

REM Construction du projet Angular
echo Construction du projet Angular...

ng build --configuration=production --base-href /abdelAzizPrime/

REM Vérifier si la construction a réussi
IF ERRORLEVEL 1 (
    echo Échec de la construction. Abandon du déploiement.
    exit /b 1
)

echo Fin construction du projet Angular...

npx angular-cli-ghpages --dir=dist/abdel-aziz-prime/browser   

echo Appli héberger !  :)

REM Fin du script
echo Déploiement terminé !
exit /b 0
