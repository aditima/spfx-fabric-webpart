# spfx-fabric-webpart
Basic SPFx + Fabric scaffolding

## To get here
1. npm install @microsoft/generator-sharepoint
2. yo @microsoft/sharepoint --> choose default options to create a React webpart
3. Replace rush-stack-compiler version to 3.2 to work with OUFR
4. Add OUFR to package.json

## To run
1. npm install -g gulp & npm install
2. gulp trust-dev-cert
3. gulp serve

## To upload to SharePoint and test locally
1. gulp bundle
2. gulp package-solution
3. Find the .sppkg file under /sharepoint and upload that to the site app catalog
