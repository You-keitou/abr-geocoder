import { test, expect, describe } from '@jest/globals'
import { kan2num } from "../kan2num"

describe('kan2num', () => {
	test('test1', ()=>{
		const result = kan2num("ソルティア岡本一丁目");
		expect(result).toBe('ソルティア岡本1丁目')
	})
	test('test2', ()=> {
		const result = kan2num('ソルティア岡本四百四十五');
		expect(result).toBe('ソルティア岡本四百45')
	})
})