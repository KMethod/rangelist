## Introduction

tool for add/remove range

## HOW To Use

const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.remove([2, 3]);
rl.print();
// Should display: [1, 1) [4, 5)