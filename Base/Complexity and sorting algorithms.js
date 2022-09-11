

/**
 * 认识时间复杂度：
 * 		常数时间的操作
 * 一个操作如果和样本的数据量没有关系，没有都是固定的时间内完成的操作，叫做常数操作。
 * 		时间复杂度为一个算法流程中，常数操作数量的一个指标。常用O（大O）来表示。
 * 具体：先要对一个算法流程非常熟悉，然后去写出这个算法流程中，发生了多少常数操作，进而总结出常数操作数量的表达式。
 * 表达式中，只要高阶项（同时剔除系数），剩下的部分如果为f（N），那么时间复杂度为O(f(N))。
 * 评价一个算法流程的好坏，先看时间复杂度的指标，然后在分析不同数据样表下的实际运行时间，也就是“常数项时间”
*/

// 选择排序、冒泡排序
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let conputend
for (let i = 0; i < arr.length; i++) {
	const element = arr[i];
	conputend = element * 88;
}

let conputend2
for (let i = 0; i < arr.length; i++) {
	const element = arr[i];
	conputend2 = element ^ 88;
}
// 此时就无法通过时间复杂度指标进行判断  需要对比“常数项时间”


/**
 *  ^   异或
 * 		1. 0 ^ N = N    N ^ N = 0
 * 		2. 交换 结合
 * 			a ^ b = b ^ a    (a ^ b) ^ c =  a ^ (b ^ c)
 * 		3. 任意多个数之间进行异或运算，和他们之间的运算顺序无关
 */


// 值类型交换 旭注意两个值是否是同一地址
let a = 1, b = 2;
a = a ^ b  // a = 1 ^ 2  b = 2
b = a ^ b  // b = 1 ^ 2 ^ 2 = 1   a = 1 ^ 2
a = a ^ b  // a = 1 ^ 2 ^ 1 = 2   b = 1


// 面试题 要求：时间On  空间O1
// 1. 整型数组 只有一个数字出现了单数次 输出该数字
let res = 0;
arr.forEach((item) => {
	res ^= item
	return res;
})//  异或运算的第三条

// 2. 整型数组 有两个数字出现了单数次 输出该数字
let res = 0;
arr.forEach((item) => {
	res ^= item
})//  异或运算的第三条

let onlyOne = 0 // res
let rightOne = res & (~res + 1) // 提取出最右位的1

for (const cur of arr) {
	if ((cur & rightOne) == 1) {
		onlyOne ^= cur
	}
}

// return [res, onlyOne]

/**
 * 	通过res ^ 到最后 res = a ^ b
 *   因为a b 两值不相等所以res的某一位一定存在一个1假设 res 的某一位是1，那么a b的相同位一定不会都为1。
 * 		我们可以通过定义res` 对a或b 继续进行^,那么res`得到的值就为a或者b。
 * 将res 和 res`进行^,分别得到的就是两个值
 * */

// 插入排序
/**
 * 理解：如同扑克牌一样，我们将根据牌面值的大小进行排序
 * 时间复杂度：O(N^2)，额外空间复杂度：O(1)
 * 注意；无法考量数组之间值的顺序，算法流程按照最差的情况来估计时间复杂度
*/

function insertionSort(arr) {
	if (arr == null || arr.length < 2) return;
	for (let i = 1; i < arr.length; i++) { // 0 ~ i 做到有序
		for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
			swap(arr, j, j + 1)
		}
	}
	return arr
}

function swap(arr, i, j) {// j 和 i 的位置重叠就会出错：会被消掉为0
	arr[i] = arr[i] ^ arr[j]
	arr[j] = arr[i] ^ arr[j]
	arr[i] = arr[i] ^ arr[j]
	return arr
}

// test
let array = [2, 3, 6, 5, 8, 1, 9, 4]
console.log(insertionSort(array))

// 二分查找法
/**
1. 一个有序数组找某个数是否存在 时间复杂度：O(logN)
2. 一个有序数组中，找>=某个数最左侧或组右侧的位置
思路：通过变量I记录每一次找到的符合要求值的索引，对索引进行更新

3. 局部最小值：某数组无序，每一个值与其相邻位置的内容一定不相等

* 局部最小解题：
* 	1. 0 和 1 比较，返回最小值
* 	2. N-1 和 N-2 比较，返回最小值
* 	3. M-1 和 M 和 M+1 比较，返回最小值
* 思路：数组在0和N-1的位置一定存在最小值，折半循环判断
*/


// 对数器
/**
 * 概念：测试
 * 使用:
 * 	1. 有一个理想的方法A，一个暴力不考虑性能的解法B
 * 	2. 实现一个对数器，产生随机样本
 * 	3. 对两个方法进行测试
 * 	4. 不一致，对样本进行干预，对方法进行修改
 * 	5. 当通过率为百分百时，可以确认方法正确
*/


// 选择、排序、冒泡：都是O(N^2)
