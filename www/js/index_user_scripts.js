/*jshint browser:true */
/*global $ */
(function () {
    "use strict";
    /*
      hook up event handlers 
    */
    function register_event_handlers() {

        $("#menuTop").hide();

        /* button  #brnLogin */
        $(document).on("click", "#brnLogin", function (evt) {
            /*global activate_subpage */
            $("#menuTop").show();
            $("#sadalogo").hide();
            activate_subpage("#homepage");
            return false;
        });

        /* graphic button  #btnAduan */
        $(document).on("click", "#btnAduan", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            activate_subpage("#aduan");
            return false;
        });

        /* graphic button  #btnTunggakan */
        $(document).on("click", "#btnTunggakan", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            activate_subpage("#tunggakan");
            return false;
        });

        /* graphic button  #btnKutipan */
        $(document).on("click", "#btnKutipan", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            activate_subpage("#kutipan");
            return false;
        });

        /* graphic button  Graph perolehan */
        $(document).on("click", ".uib_w_22", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        type: 'bar',
                        data: [1, 2, 3, 4, 5, 6],
                        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
                        borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
                        borderWidth: 1
        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
            }]
                    }
                }
            });
            activate_subpage("#graph");
            return false;
        });

        /* button  #menuTop */
        $(document).on("click", "#menuTop", function (evt) {
            /*global uib_sb */
            /* Other possible functions are: 
              uib_sb.open_sidebar($sb)
              uib_sb.close_sidebar($sb)
              uib_sb.toggle_sidebar($sb)
               uib_sb.close_all_sidebars()
             See js/sidebar.js for the full sidebar API */

            uib_sb.toggle_sidebar($(".uib_w_8"));
            return false;
        });

        /* button  Home */
        $(document).on("click", ".uib_w_11", function (evt) {
            $("#sadalogo").hide();
            /*global activate_subpage */
            activate_subpage("#homepage");
            uib_sb.toggle_sidebar($(".uib_w_8"));
            return false;
        });

        /* button  Aduan */
        $(document).on("click", ".uib_w_12", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            activate_subpage("#aduan");
            uib_sb.toggle_sidebar($(".uib_w_8"));
            return false;
        });

        /* button  Kutipan */
        $(document).on("click", ".uib_w_13", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            activate_subpage("#kutipan");
            uib_sb.toggle_sidebar($(".uib_w_8"));
            return false;
        });

        /* button  Tunggakan */
        $(document).on("click", ".uib_w_14", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            activate_subpage("#tunggakan");
            uib_sb.toggle_sidebar($(".uib_w_8"));
            return false;
        });

        /* button  Graph Perolehan */
        $(document).on("click", ".uib_w_15", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
                        borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
                        borderWidth: 1
        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
            }]
                    }
                }
            });
            activate_subpage("#graph");
            uib_sb.toggle_sidebar($(".uib_w_8"));
            return false;
        });

        /* button  Logout */
        $(document).on("click", ".uib_w_16", function (evt) {
            $("#menuTop").hide();
            $("#sadalogo").show();
            /*global activate_subpage */
            activate_subpage("#page_60_93");
            uib_sb.toggle_sidebar($(".uib_w_8"));
            return false;
        });

        /* button  #btntunggakanbesar */
        $(document).on("click", "#btntunggakanbesar", function (evt) {
            /*global activate_subpage */
            activate_subpage("#tunggakanBesar");
            return false;
        });

        /* button  #btntunggakanlama */
        $(document).on("click", "#btntunggakanlama", function (evt) {
            /*global activate_subpage */
            activate_subpage("#TunggakanLama");
            return false;
        });

        /* button  #GaduanH */
        $(document).on("click", "#GaduanH", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            var aduaharian = document.getElementById("chartgraphHarian");
            var myChart = new Chart(aduaharian, {
                type: 'line',
                data: {
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"],
                    datasets: [{
                        label: 'Aduan Harian',
                        data: [12, 19, 3, 12, 1, 2, 3, 4, 5, 6, 7, 3, 2, 3, 4, 4, 5, 1, 2, 2, 4, 12, 2, 3, 4, 10],
                        backgroundColor: [
                 'rgba(255,99,132,0)',
            ],
                        borderColor: [
                'rgba(255,99,132,1)',
            ],
                        borderWidth: 1
        }]
                },
              options: {
                   scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Hari Bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bilangan'
                        }
                    }]
                }
                }
            });

            /*global activate_subpage */
            activate_subpage("#graphHarian");
            return false;
        });

        /* button  #GaduanB */
        $(document).on("click", "#GaduanB", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            var ctx = document.getElementById("chartgraphBulanan");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["January", "Febuary", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: ' Aduan Bulanan',
                        data: [50, 44, 34, 41, 12, 32, 23],
                        backgroundColor: [
              'rgba(255, 255, 255, 0)'

            ],
                        borderColor: [
               'rgba(0, 0, 255, 1)'

            ],
                        borderWidth: 1
        }]
                },
                options: {
                   scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bilangan'
                        }
                    }]
                }
                }
            });

            /*global activate_subpage */
            activate_subpage("#graphBulanan");
            return false;
        });

        /* button  #GaduanT */
        $(document).on("click", "#GaduanT", function (evt) {
            $("#sadalogo").show();
            /*global activate_subpage */
            var ctx = document.getElementById("chartgraphTahunan");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["2014","2015", "2016", "2017"],
                    datasets: [{
                        label: 'Aduan Tahunan',
                        data: [800, 750, 900, 788],
                        backgroundColor: 
                        'rgba(100,155, 255, 1)',
                        borderColor: 
                            'rgba(100,155, 255,1)',
                    
                        borderWidth: 1
        }]
                },
               options: {
                   scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Tahun'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bilangan'
                        }
                    }]
                }
                }
            });

            /*global activate_subpage */
            activate_subpage("#graphTahunan");
            return false;
        });

        /* button  #GkutipanH */
    $(document).on("click", "#GkutipanH", function(evt)
    {
        $("#sadalogo").show();
            /*global activate_subpage */
            var aduaharian = document.getElementById("chartgraphHarian");
            var myChart = new Chart(aduaharian, {
                type: 'line',
                data: {
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"],
                    datasets: [{
                        label: 'Kutipan Harian',
                        data: [120400, 140050, 124040, 140740, 230010, 100140, 114562, 145214, 62321, 114512, 114521, 314521, 221141, 112321, 151444, 42111, 84111, 35464, 114241, 112141,121414, 112411, 84111, 92444, 92114, 11141],
                        backgroundColor: [
                 'rgba(255,99,132,0)',
            ],
                        borderColor: [
                'rgba(255,99,132,1)',
            ],
                        borderWidth: 1
        }]
                },
                options: {
                   scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Hari bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'RM'
                        }
                    }]
                }
                }
            });

         activate_subpage("#graphHarian"); 
         return false;
    });
    
        /* button  #GkutipanB */
    $(document).on("click", "#GkutipanB", function(evt)
    {
         $("#sadalogo").show();
            /*global activate_subpage */
            var ctx = document.getElementById("chartgraphBulanan");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["January", "Febuary", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: ' Kutipan Bulanan',
                        data: [12045445, 13214521, 21124125, 15124512, 12145214, 14123521, 13251241],
                        backgroundColor: [
              'rgba(255, 255, 255, 0)'

            ],
                        borderColor: [
               'rgba(0, 0, 255, 1)'

            ],
                        borderWidth: 1
        }]
                },
                options: {
                   scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Bulan'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'RM'
                        }
                    }]
                }
                }
            });
         activate_subpage("#graphBulanan"); 
         return false;
    });
    
        /* button  #GkutipanT */
    $(document).on("click", "#GkutipanT", function(evt)
    {
      $("#sadalogo").show();
            /*global activate_subpage */
            var ctx = document.getElementById("chartgraphTahunan");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["2014","2015", "2016", "2017"],
                    datasets: [{
                        label: 'Kutipan Tahunan',
                        data: [32142512, 34124521, 34521241, 35124570],
                        backgroundColor: 
                        'rgba(100,155, 255, 1)',
                        borderColor: 
                            'rgba(100,155, 255,1)',
                    
                        borderWidth: 1
        }]
                },
                options: {
                   scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Tahun'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'RM'
                        }
                    }]
                }
                }
            });

         activate_subpage("#graphTahunan"); 
         return false;
    });
    
    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();