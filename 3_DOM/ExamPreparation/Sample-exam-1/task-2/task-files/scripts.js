$.fn.tabs = function() {
    const $container = $("#tabs-container");
    $container.addClass("tabs-container");

    const $tabsContent = $(".tab-item-content");
    $tabsContent.hide();

    const $allTabTitles = $(".tab-item-title");

    // Initial state
    let $currentTab = $allTabTitles.first();
    $currentTab
        .parent()
        .addClass("current")
        .find(".tab-item-content")
        .show();

    $container.click(setNewCurrent)

    function setNewCurrent(ev) {
        const $clickedTarget = $(ev.target);
        if ($clickedTarget.is(".tab-item-title")) {
            hideOld($currentTab);
            showNew($clickedTarget);
            $currentTab = $clickedTarget;
        }
    }

    function hideOld(element) {
        element
            .parent()
            .removeClass("current")
            .find(".tab-item-content")
            .hide();
    }

    function showNew(element) {
        element
            .parent()
            .addClass("current")
            .find(".tab-item-content")
            .show();;
    }
};