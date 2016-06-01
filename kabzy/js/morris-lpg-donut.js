$(function() {
    Morris.Donut({
      element: 'morris-donut',
      data: [
        {label: "LPG/Diesel", value: 86},
        {label: "Diesel (LPG Empty)", value: 9},
        {label: "Idle Time", value: 5}
      ]
    });

});
