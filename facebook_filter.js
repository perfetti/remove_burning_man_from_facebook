(function() {
  var observer = new MutationObserver(function(mutations) {
    const hasBurningMan = str => (
      str && (
        str.includes('burningman')  ||
        str.includes('burning man') ||
        str.includes('#theburn')
      )
    )
    mutations.forEach(function(mutation) {
      var newNodes = mutation.addedNodes;
      if (newNodes !== null) {

        var nodes = document.querySelectorAll('.fbUserContent, .userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4, ._4-u2');
        for (var ii = 0, nn = nodes.length; ii < nn; ii++)
        {
          var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
          if (hasBurningMan(text.toLocaleLowerCase()) && nodes[ii].style.display != 'none')
          {
            nodes[ii].style.display = 'none';
          }
        }

      }
    });
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  });

})();
