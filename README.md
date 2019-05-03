## TASK DESCRIPTION 

#### Pages to make    
  • Homepage (1_start)  
  • Catalog (2_catalog) 
  • Item details page (3_item)  
  • Shopping bag (4_shopping_bag) 

#### Acceptance criteria
Your solution would be evaluated be the following criteria:   
Markup   
  • For screen width larger than 375px (including) pages should use mobile layout.    
  • For screen width larger than 768px (including) page should use tablet layout.   
  Page layout can be switched from mobile to tablet layout earlier than 768px if you see that this
  wouldn’t break your layout.   
  • For screen width larger than 1024px page should use desktop layout.   
  • Main content area shouldn't stretch more than 1180px.   
  • Promo blocks (that take full width on desktop layout) shouldn’t stretch more than 1300px.   
  • Used HTML tags should be semantic.    
  • Semantic names of classes and ids.    
  • Correct using of CSS3 rules.    
  • Markup must be compatible with list of supported browsers.    
  • All links and buttons have noticeable hover and active state.   
  • Mobile version should have menu as shown in 5_menu file.    
  • Penalty might be applied to noticeably deviations from design. Do your best to make your layout
  as close as possible to design.   

#### Functionality   
List or requirements for basic functionality (navigation, user interaction)   
Homepage (Start)    
  • Carousel (slider) at the top of Homepage should show static images.   
  Images must me changed every 10 seconds.    
  (NOTE: Animations for carousel are part of Extra miles section)   
  • Click on images in carousel should navigate user to Catalog or Item details page (in alternating
  order: first, third etc. – Catalog page; second, forth etc. – Item details page).   
  • Previous/Next arrow in Carousel should be visible only on Desktop. Click should show previous
  and next image respectively; Reset image change timer (next image should be shown in 10
  seconds, and not in next second if user clicked on button before scheduled image change).   
  • Number of dots in pager (right under carousel) should match number of images in carousel.
  Highlighted dot must match corresponding image.   
  • Click on “Nike Red” (block under carousel) should navigate user to Item details page.   
  • Click on “Caps & Hats” (block under carousel) should navigate user to Catalog page.   
  • Search field should be collapsed by default on tablet. Click on magnifying glass icon should
  expand search field to the left. (It should be displayed above menu items in header, see)   
  
Catalog   
  • Hover over item block should highlight item title and show overlay with “View Item” text for
  item image.   
  • Click on item block should navigate user to Item details page.    
  • Filters for Catalog page should be implemented as dropdown lists on Desktop.    
    		o Dropdown should be opened on hover over filter bar element.   
  Selected filter value should be highlighted in dropdown list.   
  
Item details page   
  • Click on “Back to catalog” link should navigate user to Catalog page.   
  • Click on buttons in Size and Color sections should highlight it. Only one button per section can be
  selected.   
  • Click on "Add to bag" item should update items count and total price in header.   
  Items count should be increased by one, total price should be increased by an arbitrary value in
  the range from 250 to 400.    
  
Shopping bag    
  • Hover over item block should highlight item title and show overlay with “View Item” text for
  item image.   
  • Click on "Clear bag" link should remove all product items from Shopping bag and replace them
  with text "Your shopping bag is empty. Use Catalog to add new items".   
  • Click on "Buy now" should remove all product items from Shopping bag and replace them with
  text "Thank you for your purchase".   
  • In both cases listed above: remove total price from header and items count should be displayed
  as (0).   
