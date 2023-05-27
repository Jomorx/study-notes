/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const map = new Map<number, ListNode | null>()
  let now = head
  let length = 1
  while (now) {
    map.set(length++, now)
    now = now.next
  }



  if (map.size===n) {
    return head?.next!
  }
  if (1 === n ) {
    map.get(map.size - n)!.next = null
    return head
  }

  map.get(map.size - n )!.next = map.get(map.size - n + 2) as ListNode
  return head
}
// @lc code=end
