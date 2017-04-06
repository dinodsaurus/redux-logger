import { expect } from 'chai';

import { repeat, pad, formatTime, timer as Timer } from '../src/helpers';

context('Helpers', () => {
  describe('repeat', () => {
    it('should repeat a string the number of indicated times', () => {
      expect(repeat('teacher', 3)).to.equal('teacherteacherteacher');
      expect(repeat('teacher', 0)).to.equal('');
    });
  });
  describe('pad', () => {
    it('should not pass any props', () => {
      expect(pad()).to.equal('0');
    });
    it('should add padding to a number', () => {
      expect(pad(5, 2)).to.equal('05');
      expect(pad(4, 3)).to.equal('004');
      expect(pad(10, 4)).to.equal('0010');
    });
  });
  describe('formatTime', () => {
    it('should not return formated date', () => {
      expect(formatTime()).to.equal('invalid date');
    });
    it('should return formated date', () => {
      // 30.3.2017 15:45:30
      const date = new Date(2017, 3, 30, 15, 45, 30);
      expect(formatTime(date)).to.equal('15:\n    45:\n    30.\n    000');
    });
  });
  describe('timer', () => {
    it('should return date as timer', () => {
      const time = new Timer();
      expect(time instanceof Date).to.equal(true);
    });
  });
});
