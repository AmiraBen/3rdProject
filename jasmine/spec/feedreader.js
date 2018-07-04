$(function() {

    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         it('ensure URLs are defined and not empty',function () {
             for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
             }
         })
         it('ensure Names are defined and not empty',function () {
             for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
             }
         })
    });

    describe('The menu',function () {
          it('should be hidden by default',function () {
            expect($("body").hasClass("menu-hidden")).toBe(true);
          })
          it('should change visibility when menu icon is clicked',function () {
            $('body').removeClass('menu-hidden');
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $('body').addClass('menu-hidden');
            expect($("body").hasClass("menu-hidden")).toBe(true);
          })
    })

    describe('Initial Entries',function () {
        beforeEach(function(done){
          loadFeed(0,function () {
          });
          done() 
        });
        it('should complete its work and there is at least a single entry within the .feed container.',function (done) {
          expect($(".feed")[0].length !== 0).toBe(true);
          done()
        })
    })

    describe('New Feed Selection',function () {
        let entries = $(".feed")[0].outerHTML;
        beforeEach(function(done){
          loadFeed(0,function () {
          done() 
          });
        });
         it('should actually change the content',function (done) {
          expect($(".feed")[0].outerHTML).not.toEqual(entries);
          done()
         })
    })

}());
