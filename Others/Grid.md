===================================== 
   <!-- Grid Layout -->
========================================

.grid {
  max-width: 1000px;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);  <!-- Can also use auto or px  -->
  grid-template-rows: 100px 200px;
  grid-gap: 15px 20px;
}
-
<div class="grid">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
</div>

=================================================================================
<!-- Flexible Track Sizing with minmax() -->
=================================================================================

grid-template-columns: repeat(3, minmax(200px, 1fr));

=================================================================================
<!-- Repeat Tracks with auto-fill and auto-fit -->
=================================================================================

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

Autofill will generate auto spaces and auto fit as long as given 1fr on minmax property (regarding the max not the min ofc) it'll actually get the columns to occupy more space until it fits the content.

=================================================================================
<!-- Control the Auto-placement of Grid Items -->
================================================================================
.grid {
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 15px 20px;s
  grid-auto-rows: 1fr;
  grid-auto-flow: column;
  
}
We canc ontrol impiclit columns and rowos size with grid-auto-rows/columns/: function and we can control if we can the layout to show implicit grid itemes as columns or rows using grid-auto-flow.


================================================================================
<!-- Position Items by Grid Lines -->
================================================================================

.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px 350px 100px;
}

header {
  grid-column-start: 1;
  grid-column-end: 3;
}
footer {
  grid-column-start: 1;
  grid-column-end: 3;
}
================================================================================
<!-- Negative Grid Lines and Shorthand Syntax -->
================================================================================

.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px minmax(200px, 1fr) 100px 100px;
  grid-gap: 10px;
}


header {
  grid-column: 1 / -1;
}

main {
  grid-row: 2 / 3;
}

aside {
  grid-row: 2 / -1;
}

footer {
  grid-column: -3 / -1;
}
-
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Grid Layout</title>
	  <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
    <link href="css/page.css" rel="stylesheet">
    <link href="css/grid.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <header>Header</header>
      <main>Main</main>
      <aside>Aside</aside>
      <footer>Footer</footer>
    </div>
  </body>
</html>

================================================================================
<!-- Placing Elements Using Grid Template Areas -->
================================================================================

.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px minmax(200px, 1fr) 100px;
  grid-gap: 10px;
  grid-template-areas: 
    "header header aside"
    "nav main aside"
    "footer footer .";
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}

/*You can use a "." to represent an empty cell*/

================================================================================
<!-- Adjust the Grid with Media Queries -->
================================================================================

.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 10px;
  grid-template-areas: 
    "header"
    "nav"
    "main"
    "aside"
    "footer";
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100px minmax(150px, auto) 100px;
    grid-template-areas: 
      "header header header"
      "nav main aside"
      "footer footer footer";
   }
}

@media (min-width: 992px) {
  .container {
    grid-template-areas:
      "header header header"
      "nav main aside"
      "nav footer footer";
   }
}
===================================== 
   <!-- Grid & Flexbox Layout -->
========================================

.main-content {
  width: 95%;
  max-width: 1000px;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: auto;
}







