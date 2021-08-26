# BlazorGauge
This repository is a sample using ApexCharts in a Blazor WebAssembly project.
It uses JavaScript interoperability to inject the original JS ApexCharts library into the Blazor project, instead of the Blazor-ApexCharts wrapper, which does not currently work as well.

The main page contains a sample for use, and a few functions. The form/input button functions can be discarded for your own personal implementation. Just leave in the `updateGauge` and `OnAfterRenderAsync` methods, as the latter renders the chart after the webpage loads and the former is used to be called when the values for the gauge is to be updated.

The gauge values (stage and grade) take int values between 0 and 100.
For Stage: 0-25 = Green/I. 26-50 = Yellow/II. 51-75 = Yellow/III. 76-100 = Red/IV
For Grade: 0-25 = Green/A. 26-75 = Yellow/B. 76-100 = Red/C

Keep this in mind when implementing the gauge into your project, regarding the values generated/passed into `updateGauge(stage,grade)`, so that you get accurate results.
