$(document).ready(function() {
    $("#btn-pstore-set").click(function() {
        var btn = this;
        VRUB.Plugins.PersistentStore.Set("foo", "bar").then(function() {
            $(btn).text('Successflly set "Foo" to "Bar"');
        }).reject(function() {
            $(btn).text('Failed to set "Foo" to "Bar"');
        });
    });
    
    $("#btn-pstore-get").click(function() {
        var btn = this;
        VRUB.Plugins.PersistentStore.Fetch("foo").then(function(response) {
            $(btn).text("Foo: " + response);
        }).reject(function() {
            $(btn).text('Failed to fetch "Foo"');
        });
    });
    
    $("#btn-pstore-clear").click(function() {
        var btn = this;
        VRUB.Plugins.PersistentStore.Clear("foo").then(function() {
            $(btn).text('Successflly cleared "Foo"');
        }).reject(function() {
            $(btn).text('Failed to clear "Foo"');
        });
    });
    
    $("#btn-pstore-clearall").click(function() {
        var btn = this;
        VRUB.Plugins.PersistentStore.ClearAll().then(function() {
            $(btn).text('Successflly cleared all values');
        }).reject(function() {
            $(btn).text('Failed to clear all values');
        });
    });
    
    $("#btn-keyboard-show").click(function() {
        VRUB.Plugins.Keyboard.Show();
    });
    
    $("#btn-keyboard-hide").click(function() {
        VRUB.Plugins.Keyboard.Hide();
    });
    

});