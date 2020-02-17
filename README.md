# Acme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

This project is a SSCCE that illustrates a compilation problem I get since I upgraded a project from angular 8 to angular 9.

# Steps to reproduce

- `npm install`
- `ng build my-lib`

A warning appears during the compilation : 

`WARNING: No name was provided for external module '@env/environment' in output.globals – guessing 'environment'`

Also, using this library in an angular project generates an error :

```
ERROR in The target entry-point "my-lib" has missing dependencies:
 - @env/environment
```

I opened a question on stackoverflow [here](https://stackoverflow.com/questions/60210637/path-in-tsconfig-is-interpreted-as-an-external-module)
