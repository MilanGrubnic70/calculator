describe('Calculator', function() {
    var calc;
    beforeEach(function() {
        calc = new Calculator();
    });

    it('can add positive intergers', function() {
        expect(calc.add(1, 1)).toEqual(2);
    });

    it('can subtract positive intergers', function() {
        expect(calc.sub(5, 3)).toEqual(2);
    });

    it('can multiply positive intergers', function() {
        expect(calc.multi(5, 5)).toEqual(25);
    });

    it('can divide positive integers', function() {
        expect(cacl.div(25, 5)).toEqual(5);
    });
});