import {formatCurrency} from "../../scripts/utils/money.js";

describe('tests suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(1293)).toEqual('12.93');
    });
    it('work with cents 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('rounded cents', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});