import { Selector, ClientFunction } from 'testcafe';

fixture `Element properties`
    .page('https://subscription.packtpub.com/');


test("Check an element's markup", async t => {
    //const element = Selector('div').withText('Sign In');
    const element=Selector('a').withText('Sign In');

    const elementText = await element.innerText;

    // Log the text content to the console
    console.log('Element Text:', elementText);

    await t.click(element).expect(element.exists).notOk("ELE NOT FOUND");
    
    const ab=Selector('#inline-form-input-username');
    const c=Selector('#inline-form-input-password');
    const d=Selector('.login-page__main__container__login__form__button__login')
    // Perform actions on the selected element
    
    await t.typeText(c,'Bd@190816');
    await t.typeText(ab,'subibaskar@gmail.com');
    await t.click(d).expect(element.exists).notOk("ELE NOT FOUND");

    const e=Selector('#library-dropdown');
    const g=await e.innerText;
    const f = await e.getStyleProperty('color');

    // Log the text content to the console
    await t.expect(g).eql('My Library','Not expected');
    await t.expect(f).eql('rgb(69, 74, 85)', 'Element color is not as expected');

    const h= ClientFunction(() => {
        const i= document.querySelector('#library-dropdown');
        return {
            top: i.offsetTop,
            left: i.offsetLeft
        };
    });

    // Get the actual position of the element
    const a= await h();
    await t.expect(a.top).eql(0, 'Element top position is not as expected');
    await t.expect(a.left).eql(5, 'Element left position is not as expected');


     //const dropdown = Selector('yourDropdownSelector');

    // Open the dropdown
    await t.click(e);

    // Check that all elements in the dropdown are correct (e.g., <a> tags)
  //  await t.expect(e.count).gt(6, 'No options found in the dropdown');

    // Verify the tag name of each dropdown option
    const j=Selector('span').withText('Home');
    await t.click(j).takeScreenshot({path:'screen3.png'});
    await t.click(e);
    const ha=Selector('span').withText('Playlists');
    await t.click(ha).takeScreenshot({path:'screen1.png'});
    await t.click(e);
    const k=Selector('span').withText('Credits');
    await t.click(k).takeScreenshot({path:'screen2.png'});
    await t.click(e);

    const l=Selector('a').withText('Browse Library');

});
    