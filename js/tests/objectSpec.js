describe('helloWorld', function() {
    var hello = MaibornWolff.helloWorld;

    beforeEach(function(){
        spyOn(hello, 'init').and.callThrough();
    });

    afterEach(function() {
        hello.reset();
    });

    it('should be able to initialize', function() {
        expect(hello.init).toBeDefined();
        hello.init();
        expect(hello.init).toHaveBeenCalled();
    });

    it('should populate stuff during initialization', function(){
        hello.init();
        expect(hello.stuff.length).toEqual(1);
        expect(hello.stuff[0]).toEqual('Testing');
    });
});

//describe('appending strings', function() {
//
//    var hello = MaibornWolff.helloWorld;
//
//    beforeEach(function(){
//        spyOn(hello, 'init').and.callThrough();
//    });
//
//    afterEach(function() {
//        hello.reset();
//    });
//
//    it('should be able to append 2 strings', function() {
//        expect(hello.append).toBeDefined();
//    });
//    it('should append 2 strings', function() {
//        expect(hello.append('hello','world')).toEqual('hello world');
//    });
//});
