# typescript-tutorial

npm i -g typescript
    tsc sandbox.ts


tsc --init

tsc src/decorator.ts --experimentalDecorators "true" --emitDecoratorMetadata "true"

tsc src/decorator.ts --experimentalDecorators "true" --emitDecoratorMetadata "true" && node src/decorator.js


tsc src/methodDecorator.ts --target ES5 --emitDecoratorMetadata --experimentalDecorators