
var $builtinmodule = function (name) {
    var alerts = {};

    var Popup = function ($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function (self, text){
            // text is a skulpt string type object
            self.text = text.v; // get the value from the type object
        });
        $loc.show = new Sk.builtin.func(function (self){
            alert(self.text);
        });
    };
    alerts.Popup = Sk.misceval.buildClass(alerts, Popup, 'Popup', []);

    return alerts;
};
