const foo: any = "foo";
const bar: unknown = "bar";

foo.length; 
bar.length; 

if (typeof bar === 'string') {
  bar.length; 
}