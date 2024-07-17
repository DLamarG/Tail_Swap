import re
def tail_swap(strings):
    front = strings[0]
    back = strings[1]
    f1 = re.split(':', front)
    b1 = re.split(':', back)
    return [f1[0]+':'+b1[1], b1[0]+':'+f1[1]]

print(tail_swap(['abc:123', 'cde:456']))
print(tail_swap(['a:12345', '777:xyz']))