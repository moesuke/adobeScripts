// eps2ai
//使う時はeps2aiフォルダの中に変換したいepsを入れておくこと
folderRef = new Folder ("/Users/aokimoe/eps2ai");
fileList = folderRef.getFiles("*.eps");

for (i=0; i<fileList.length; i++)
{
    // Epsデータを開く
    fileObj = new File(fileList[i].fsName);
    open(fileObj);

    // 保存形式
    saveFile = new File(fileList[i]);

    // 保存する
    activeDocument.saveAs(fileObj);

    // ファイルを閉じる
    activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}