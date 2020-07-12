const countMe = info => {
    const selectedText = info.selectionText;
    const totalWords = selectedText.trim().split(' ');

    browser.notifications.create({
        "type": "basic",
        "title": "Word Count",
        "message": `Total Words: ${totalWords.length}\nTotal Characters: ${selectedText.length}`
    });
}

browser.contextMenus.create({
    id: "count-me",
    title: 'Word Count',
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(countMe);