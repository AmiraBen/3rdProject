/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
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

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
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

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function () {
        let entries = $(".feed")[0].outerHTML;
        beforeEach(function(done){
          loadFeed(0,function () {
          done() 
          });
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('should actually change the content',function (done) {
          
          expect($(".feed")[0].outerHTML).not.toEqual(entries);
          done()
         })
    })

}());
