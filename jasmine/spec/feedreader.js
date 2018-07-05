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
            $('.menu-icon-link').click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
          })
    })

    describe('Initial Entries',function () {
        beforeEach(function(done){
          loadFeed(0,done);
        });
        it('should complete its work and there is at least a single entry within the .feed container.',function (done) {
          expect($(".feed").children().length).toBeGreaterThan(0);
          done()
        })
    })

    describe('New Feed Selection',function () {
        let entries; 
        beforeEach(function(done){
          loadFeed(0,function () {
            entries = $(".feed").html();
            loadFeed(1,done);
          });
        });
         it('should actually change the content',function (done) {
          expect($(".feed").html()).not.toEqual(entries);
          done()
         })
    })

}());
