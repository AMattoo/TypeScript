/// <reference path='fourslash.ts'/>

// Should handle all the various type references

//// interface Fo/*interface_definition*/o {
////     hello (): void;
//// }
////
//// interface Bar {
////     hello (): void;
//// }
////
//// let x1: Foo            = [|{ hello ()          { /**typeReference*/ } }|];
//// let x2: () => Foo      = [|(() => { hello ()   { /**functionType*/} })|];
//// let x3: Foo | Bar      = [|{ hello ()          { /**unionType*/} }|];
//// let x4: Foo & (Foo & Bar)      = [|{ hello ()          { /**intersectionType*/} }|];
//// let x5: [Foo]          = [|[{ hello ()         { /**tupleType*/} }]|];
//// let x6: (Foo)          = [|{ hello ()          { /**parenthesizedType*/} }|];
//// let x7: (new() => Foo) = [|class { hello ()    { /**constructorType*/} }|];
//// let x8: Foo[]          = [|[{ hello ()         { /**arrayType*/} }]|];
//// let x9: { y: Foo }     = [|{ y: { hello ()     { /**typeLiteral*/} } }|];
////
//// // Should not do anything for type predicates
//// function isFoo(a: any): a is Foo {
////     return true;
//// }

goTo.marker("interface_definition");
verify.allRangesAppearInImplementationList();