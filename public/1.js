(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Academics.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegulationTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegulationTab */ "./resources/js/components/RegulationTab.vue");
/* harmony import */ var _SchemeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchemeTab */ "./resources/js/components/SchemeTab.vue");
/* harmony import */ var _SubTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubTab */ "./resources/js/components/SubTab.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://127.0.0.1:8000/api/program_levels/').then(function (response) {
      return _this.programLevel = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/subject/").then(function (response) {
      return _this.subjects = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  destroyed: function destroyed() {},
  data: function data() {
    return {
      items: ['regulations', 'scheme', 'subjects', 'feedback'],
      activeItem: 'regulations',
      regulations: [],
      students: [],
      depLength: null,
      program_id: null,
      Program: '-',
      regulation: [],
      program_level: null,
      programLevel: {},
      NoOfStudents: 2000,
      selectedProgram: null,
      selectedRegulationLabel: '',
      selectedRegulation: null,
      subjects: [],
      semesters: [],
      selectedItem: '',
      specializations: {},
      itemselected: null
    };
  },
  methods: {
    isActive: function isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function setActive(menuItem) {
      this.activeItem = menuItem;
    },
    getNoOfStudents: function getNoOfStudents() {
      return this.students.length;
    },
    getRegulationEndYear: function getRegulationEndYear() {
      if (this.regulation.end_year == null || this.regulation.end_year == 0) {
        return 'In Force';
      } else {
        return this.regulation.end_year;
      }
    },
    selectedPrograms: function selectedPrograms(event) {
      var _this2 = this;

      this.program_level = event;

      if (this.program_level == 1) {
        this.program_id = 1;
      } else {
        this.program_id = 2;
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/regulation/".concat(this.program_id)).then(function (response) {
        return _this2.regulations = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    selectedRegulations: function selectedRegulations(event) {
      var _this3 = this;

      this.Program = event; // this.regulation.short_name = '-',

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/regulations/".concat(this.selectedRegulation)).then(function (response) {
        return _this3.regulation = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/students/".concat(this.selectedRegulation)).then(function (response) {
        return _this3.students = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/regulations/".concat(this.selectedRegulation, "/specializations")).then(function (response) {
        return _this3.specializations = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/regulations/".concat(this.selectedRegulation, "/semesters")).then(function (response) {
        return _this3.semesters = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  },
  components: {
    RegulationTab: _RegulationTab__WEBPACK_IMPORTED_MODULE_1__["default"],
    SchemeTab: _SchemeTab__WEBPACK_IMPORTED_MODULE_2__["default"],
    SubTab: _SubTab__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegulationTab.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['regulation', 'programLevel', 'program_level', 'selectedProgram', 'Program', 'selectedRegulation', 'regulations', 'program_id'],
  data: function data() {
    return {
      semLength: this.regulation.total_semesters,
      tabIndex: 0,
      isBusy: false,
      bordered: true,
      program: '',
      academicYearDuration: null,
      getSemCount: null,
      curriculuLength: null,
      curriculumCategories: [],
      selectedItem: '',
      creedits_table: [{
        key: 'Semester'
      }, {
        key: 'Total_credits'
      }],
      gradeTableKeys: [{
        key: 'absolute_marks'
      }, {
        key: 'letter_grade'
      }, {
        key: 'grade_points_assigned'
      }, {
        key: 'remark'
      }],
      gradeTableValues: [{
        'absolute_marks': '95-100',
        'letter_grade': 'A+',
        'grade_points_assigned': '10.0',
        'remark': 'Pass'
      }, {
        'absolute_marks': '90-94',
        'letter_grade': 'A',
        'grade_points_assigned': '9.5',
        'remark': 'Pass'
      }, {
        'absolute_marks': '85-89',
        'letter_grade': 'A-',
        'grade_points_assigned': '9.0',
        'remark': 'Pass'
      }, {
        'absolute_marks': '80-84',
        'letter_grade': 'B+',
        'grade_points_assigned': '8.5',
        'remark': 'Pass'
      }, {
        'absolute_marks': '75-79',
        'letter_grade': 'B',
        'grade_points_assigned': '8.0',
        'remark': 'Pass'
      }, {
        'absolute_marks': '70-74',
        'letter_grade': 'B-',
        'grade_points_assigned': '7.5',
        'remark': 'Pass'
      }, {
        'absolute_marks': '65-69',
        'letter_grade': 'C+',
        'grade_points_assigned': '7.0',
        'remark': 'Pass'
      }, {
        'absolute_marks': '60-64',
        'letter_grade': 'C',
        'grade_points_assigned': '6.5',
        'remark': 'Pass'
      }, {
        'absolute_marks': '55-59',
        'letter_grade': 'C-',
        'grade_points_assigned': '6.0',
        'remark': 'Pass'
      }, {
        'absolute_marks': '50-54',
        'letter_grade': 'D+',
        'grade_points_assigned': '5.5',
        'remark': 'Pass'
      }, {
        'absolute_marks': '0-49',
        'letter_grade': 'F',
        'grade_points_assigned': '0.0',
        'remark': 'Fail'
      }, {
        'absolute_marks': '-',
        'letter_grade': 'I',
        'grade_points_assigned': '0.0',
        'remark': 'Result Withheld'
      }, {
        'absolute_marks': '-',
        'letter_grade': 'X',
        'grade_points_assigned': '0.0',
        'remark': 'Absent for End Exam'
      }],
      ugClassOfDegree: [{
        'class_of_degree': 'Pass Class',
        'range_of_CGPA': '>=4.5 but <5.5'
      }, {
        'class_of_degree': 'Second Class',
        'range_of_CGPA': '>=5.5 but <6.5'
      }, {
        'class_of_degree': 'First Class',
        'range_of_CGPA': '>=6.5 but <7.5'
      }, {
        'class_of_degree': 'First Class with Distinction',
        'range_of_CGPA': '>=7.5'
      }],
      pgClassOfDegree: [{
        'class_of_degree': 'Second Class',
        'range_of_CGPA': '>=5.5 but <6.5'
      }, {
        'class_of_degree': 'First Class',
        'range_of_CGPA': '>=6.5 but <7.5'
      }, {
        'class_of_degree': 'First Class with Distinction',
        'range_of_CGPA': '>=7.5'
      }],
      ClassOfDegree: [{
        key: 'class_of_degree'
      }, {
        key: 'range_of_CGPA'
      }],
      r14ug: [{
        'Semester': 'First Year',
        'Total_credits': 45
      }, {
        'Semester': 'Third Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Fourth Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Fifth Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Sixth Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Seventh Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Eighth Semester',
        'Total_credits': 25
      }, {
        'Semester': 'Total for entire course',
        'Total_credits': 180
      }],
      r15ug: [{
        'Semester': 'First Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Second Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Third Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Fourth Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Fifth Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Sixth Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Seventh Semester',
        'Total_credits': 22
      }, {
        'Semester': 'Eighth Semester',
        'Total_credits': 26
      }, {
        'Semester': 'Total for entire course',
        'Total_credits': 180
      }],
      r14pg: [{
        'Semester': 'First Semester',
        'Total_credits': 26
      }, {
        'Semester': 'Second Semester',
        'Total_credits': 26
      }, {
        'Semester': 'Third Semester',
        'Total_credits': 2
      }, {
        'Semester': 'Fourth Semester',
        'Total_credits': 16
      }, {
        'Semester': 'Total for entire course',
        'Total_credits': 70
      }],
      r18pg: [{
        'Semester': 'First Semester',
        'Total_credits': 18
      }, {
        'Semester': 'Second Semester',
        'Total_credits': 18
      }, {
        'Semester': 'Third Semester',
        'Total_credits': 16
      }, {
        'Semester': 'Fourth Semester',
        'Total_credits': 16
      }, {
        'Semester': 'Total for entire course',
        'Total_credits': 68
      }],
      items: [{
        sname: 1,
        name: 'Nomenclature'
      }, {
        sname: 2,
        name: 'Short Title And Application'
      }, {
        sname: 3,
        name: 'Suspension And Amendment Of Rules'
      }, {
        sname: 4,
        name: 'Requirements For Admission'
      }, {
        sname: 5,
        name: 'Structure Of The B. Tech Course'
      }, {
        sname: 6,
        name: 'Registration And Enrolment'
      }, {
        sname: 7,
        name: 'Assessment Procedure – Internal Tests And End Examinations'
      }, {
        sname: 8,
        name: 'Method of Assigning Letter Grades and Grade Points'
      }, {
        sname: 9,
        name: 'Requirements For Completing Subjects'
      }, {
        sname: 10,
        name: 'Requirements For Taking End Examinations And Promotion'
      }, {
        sname: 11,
        name: 'Revaluation Of End Examination Scripts'
      }, {
        sname: 12,
        name: 'Supplementary End Examinations'
      }, {
        sname: 13,
        name: 'Requirements For Award Of B. Tech Degree'
      }, {
        sname: 14,
        name: 'Transitory Regulations'
      }, {
        sname: 15,
        name: 'Regulations for Lateral Entry Students'
      }]
    };
  },
  methods: {
    curriculumCount: function curriculumCount() {
      if (this.regulation.short_name == 'R15UG' || this.regulation.short_name == 'R14UG') {
        this.curriculumCategories = [{
          sname: 'BS',
          name: 'Basic Science'
        }, {
          sname: 'HS',
          name: 'Humanities and Social Sciences'
        }, {
          sname: 'ED',
          name: 'Basic Engineering and Design'
        }, {
          sname: 'PJ',
          name: 'Professional Major'
        }, {
          sname: 'PN',
          name: 'Professional Minor'
        }];
        return this.curriculuLength = 'five';
      } else {
        this.curriculumCategories = [{
          sname: 'BSc',
          name: 'Basic Science'
        }, {
          sname: 'HSMC',
          name: 'Humanities and Social Sciences including Management Courses'
        }, {
          sname: 'ESC',
          name: ' Engineering Science Courses'
        }, {
          sname: 'PCC',
          name: 'Professional Core Course'
        }, {
          sname: 'PEC',
          name: 'Professional Elective Course'
        }, {
          sname: 'OEC',
          name: 'Open Elective Course'
        }];
        return this.curriculuLength = 'six';
      }
    },
    getSemesterCredits: function getSemesterCredits() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/credits/sp/".concat(this.specialization_id, "/").concat(this.semester_id)).then(function (response) {
        return _this.credits = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getSemCounts: function getSemCounts($semLength) {
      if ($semLength == 8 || $semLength == 7) {
        return this.getSemCount = 'Eight';
      } else {
        return this.getSemCount = 'Four';
      }
    },
    academicYears: function academicYears(program_level) {
      if (program_level == 1) {
        return this.academicYearDuration = 'four';
      } else {
        return this.academicYearDuration = 'two';
      }
    }
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SchemeTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['regulation', 'programLevel', 'program_level', 'selectedProgram', 'Program', 'selectedRegulation', 'regulations', 'program_id', 'specializations', 'students', 'semesters'],
  data: function data() {
    return {
      email: null,
      comment: null,
      bordered: true,
      program: '',
      selectedItem: '',
      selectedDept: null,
      selectedSem: null,
      opt: true,
      scheme: {},
      $opt: true
    };
  },
  methods: {
    addComment: function addComment(e) {
      this.error = '';

      if (!this.comment) {
        this.error = "Comment Required";
      }

      if (!this.email) {
        this.error = "Email Required";
      } else if (!this.emailValidator(this.email)) {
        this.error = "Enter Valid Email";
      }

      if (!this.error) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post();
      }

      e.preventDefault();
    },
    emailValidator: function emailValidator(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    getScheme: function getScheme(event) {
      var _this = this;

      this.currentSem = event, axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/regulations/".concat(this.selectedRegulation, "/instruction_scheme/").concat(this.currentSem)).then(function (response) {
        return _this.scheme = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getSpecId: function getSpecId(event) {
      this.opt = false, this.selectedDept = event, this.selectedSem = null;
    }
  },
  computed: {},
  components: []
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SubTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/subject").then(function (responce) {
      return _this.subjects = responce.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    addRating: function addRating(context) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/subjects/' + _this2.selectedSub + '/ratings', {
          author_email: _this2.email,
          stars: _this2.exportRating,
          comment: _this2.comment
        }).then(function (response) {
          context.commit('appendSubjectRating', response.data);
          resolve(response);
        })["catch"](function (error) {
          if (error.response) {
            reject(error.response.data);
          } else {
            reject(error.message);
          }
        });
      });
    },
    getSyllabus: function getSyllabus(event) {
      var _this3 = this;

      this.selectedSub = event, axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/subjects/".concat(this.selectedSub, "/syllabus")).then(function (responce) {
        return _this3.syllabus = responce.data;
      })["catch"](function (error) {
        return console.log(error);
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/departments/".concat(this.subjects[this.selectedSub].department_id)).then(function (responce) {
        return _this3.departments = responce.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  },
  props: ['regulation', 'programLevel', 'program_level', 'selectedProgram', 'Program', 'selectedRegulation', 'regulations', 'program_id', 'specializations', 'students', 'semesters'],
  data: function data() {
    return {
      subjects: null,
      selectedSub: null,
      syllabus: null,
      dept_name: null,
      hodEmail: null,
      officeEmail: null,
      instruction: null,
      exportRating: null,
      departments: null,
      email: '',
      comment: '',
      value: 3,
      ratingCount: 10,
      showSyllabus: true,
      showReviews: true,
      showResources: true,
      showPerformance: true,
      showContact: true,
      visible: true
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.explor div a{\r\n  color: white;\r\n  text-align: right;\r\nfont-family: \"Times New Roman\", Times, serif;\n}\n.explor div a:hover{\r\n  text-decoration: none;\r\n  color: white;\n}\n.explor div{\r\n  display: flex;\r\n  justify-content: center;\n}\n.regTab{\r\n  display: flex;\r\n  align-content: center;\n}\n.exploreTabs{\r\n  align-items: center;\r\n  display: flex;\r\n  justify-items: center;\n}\n.tab{\r\n  /* margin-right: 5px; */\r\n  margin-left: 10px;\r\n  margin-top: 5px;\r\n  max-width: 140px;\r\n  display:inline-block;\n}\n.liitem{\r\n  padding-left: 20px;\r\n  padding-top: 10px;\n}\n.exploreActive{\r\n  background-color: yellow;\n}\n#my-table{\r\n  width: 50%;\n}\n.demo{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\n}\n.demo li{\r\n  color: white;\r\n  padding-top: 10px;\r\n  padding-left:10px;\r\n  padding-right: 10px;\n}\n.explore{\r\n  justify-content: center;\r\n  display: flex;\r\n  color: black;\r\n  padding-top: 20px;\n}\n#selection{\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n  padding-top: 10px;\n}\n.button{\r\n  font-size:small;\r\n  padding-left: 2px;\r\n  margin-right:10px;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n  width:130px ;\n}\n.button :hover{\r\n  background-color: red;\r\n  color: white;\n}\n.hr {\r\n  margin-left: 10px;\r\n  margin-top: 0em;\r\n  margin-bottom: 0em;\r\n  border-style: inset;\r\n  height: 1.5px;\r\n  background-color: yellow;\n}\n.hrtab{\r\n  height: 1.2px;\r\n  background-color: brown;\r\n  margin-top: 0em;\r\n  width: 130px;\n}\n.b-form-select{\r\n  margin-right: 20px;\r\n  margin-left: 20px;\n}\n.selectreg{\r\n  margin-left: 20px;\n}\n#container{\r\n  background-color: darkgray;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  min-width: 400px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.regTabWindow{\r\n    font-family: \"Times New Roman\", Times, serif;\n}\n.regTitle{\r\n    font-family: \"Times New Roman\", Times, serif;\r\n    color: yellow;\r\n    font-size: 120%;\n}\n#gradesTable{\r\n    min-width: 300px;\r\n    max-width: 500px;\r\n    align-items: center;\r\n    text-align: center;\n}\n#gradesTable tr :hover{\r\n    color: white;\r\n    background-color: rosybrown;\n}\n.creditsTable{\r\n  width: 60%;\r\n  margin-left: 80px;\r\n  margin-top: 15px;\n}\n.explore{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: black;\n}\n#selection{\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n  padding-top: 10px;\n}\n.line {\r\n  margin-left: 5px;\r\n  margin-top: -10px;\r\n  margin-right: 5px;\r\n  margin-bottom: 10px;\r\n  border-style: inset;\r\n  height: 1.5px;\r\n  background-color: white;\n}\n.line:hover{\r\n  background-color: yellow;\n}\n.b-form-select{\r\n  margin-right: 20px;\r\n  margin-left: 20px;\n}\n.select{\r\n  min-width:300px;\r\n  max-width: 500px;\n}\n.minus{\r\n    width: 20px;\r\n    background-color: black;\r\n    margin-top: -35px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.comment{\r\n    margin-right: 50px;\r\n    margin-left: 50px;\r\n    margin-bottom: 10px;\r\n    max-width: 600px;\r\n    min-width: 300px;\n}\n.hr_scheme{\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n    height: 0.8px;\r\n    margin-left: 0px;\r\n    margin-right: 2px;\r\n    max-width: 1035px;\r\n    min-width: 500px;\r\n    background-color: brown;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.slide-fade-enter-active {\r\n        transition: all .5s ease;\n}\n.slide-fade-leave-active {\r\n        transition: all .4s ease-in-out;\n}\n.slide-fade-enter, .slide-fade-leave-to\r\n    /* .slide-fade-leave-active below version 2.1.8 */ {\r\n        transform: translateY(-20px);\r\n        opacity: 0;\n}\n.icon{\r\n    width: 20px;\r\n    height: 20px;\n}\n.card{\r\n    background-color: lightgray;\n}\n.Subrating{\r\n  background-color: darkgray !important;\n}\n.exportRating{\r\n    background-color: #bcbcbc !important ;\r\n    border: none;\r\n    border-block: none;\n}\n.exploreSyllabus{\r\n    display: flex;\r\n    text-decoration: none;\r\n    list-style: none;\r\n    align-content: center;\r\n    align-items: center;\n}\n.exploreSyllabus div{\r\n    color: whitesmoke;\n}\n.exploreSyllabus div a{\r\n    color: whitesmoke;\n}\n.exploreSyllabus div a:hover{\r\n    text-decoration: none;\r\n    color: white;\n}\n.subjects{\r\n    margin-bottom: 20px;\n}\n.collapsed > .when-open,\r\n.not-collapsed > .when-closed {\r\n  display: none;\n}\n.inputRow{\r\n    width: 100px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Academics.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegulationTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SchemeTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SubTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=template&id=7a258871&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Academics.vue?vue&type=template&id=7a258871& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "container" } }, [
    _c("p"),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "selection" } },
      [
        _c("b-form-select", {
          staticClass: "mb-3 col-5",
          attrs: {
            options: _vm.programLevel,
            "value-field": "id",
            "text-field": "short_name",
            "disabled-field": "Enabled"
          },
          on: {
            change: function($event) {
              return _vm.selectedPrograms($event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "first",
              fn: function() {
                return [
                  _c(
                    "b-form-select-option",
                    { attrs: { value: null, disabled: "", selected: "" } },
                    [_vm._v("Please select a Program")]
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.selectedProgram,
            callback: function($$v) {
              _vm.selectedProgram = $$v
            },
            expression: "selectedProgram"
          }
        }),
        _vm._v(" "),
        _vm.selectedProgram
          ? _c("b-form-select", {
              staticClass: "mb-3 col-5 selectreg",
              attrs: {
                options: _vm.regulations,
                "value-field": "id",
                "text-field": "short_name"
              },
              on: {
                change: function($event) {
                  return _vm.selectedRegulations($event)
                }
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "first",
                    fn: function() {
                      return [
                        _c(
                          "b-form-select-option",
                          {
                            attrs: { value: null, disabled: "", selected: "" }
                          },
                          [_vm._v("Please select a Regulation")]
                        )
                      ]
                    },
                    proxy: true
                  }
                ],
                null,
                false,
                3607553908
              ),
              model: {
                value: _vm.selectedRegulation,
                callback: function($$v) {
                  _vm.selectedRegulation = $$v
                },
                expression: "selectedRegulation"
              }
            })
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _vm.selectedProgram && _vm.selectedRegulation
      ? _c("div", [
          _c(
            "div",
            [
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v("PROGRAM"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(
                    " " +
                      _vm._s(
                        _vm.programLevel[_vm.program_level - 1].short_name
                      ) +
                      " "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v("REGULATION"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.regulation.short_name) + " ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v("COURSES"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.specializations.length) + " ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v("SEMESTERS"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.regulation.total_semesters) + " ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v("CREDITS"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.regulation.total_credits) + " ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v("SUBJECTS"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.subjects.length) + " ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v("STUDENTS"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.getNoOfStudents()) + " ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v(" LAUNCH YEAR"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.regulation.start_year) + " ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "button",
                  attrs: { variant: "success", pressed: true }
                },
                [
                  _vm._v(" STATUS"),
                  _c("hr", { staticClass: "hr" }),
                  _vm._v(" " + _vm._s(_vm.getRegulationEndYear()) + " ")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", [
            _c("div", { staticClass: "explor pt-4 text-uppercase" }, [
              _c("div", [
                _c("div", { staticClass: "pl-4" }, [
                  _c(
                    "a",
                    {
                      class: { active: _vm.isActive("regulations") },
                      attrs: { href: "#regulations" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setActive("regulations")
                        }
                      }
                    },
                    [_vm._v("Regulations "), _c("hr", { staticClass: "hrtab" })]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pl-4 pr-4" }, [
                  _c(
                    "a",
                    {
                      class: { active: _vm.isActive("scheme") },
                      attrs: { href: "#scheme" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setActive("scheme")
                        }
                      }
                    },
                    [_vm._v("scheme "), _c("hr", { staticClass: "hrtab" })]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pl-4 pr-4" }, [
                  _c(
                    "a",
                    {
                      class: { active: _vm.isActive("subjects") },
                      attrs: { href: "#subjects" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setActive("subjects")
                        }
                      }
                    },
                    [_vm._v("subjects "), _c("hr", { staticClass: "hrtab" })]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pl-4 pr-4" }, [
                  _c(
                    "a",
                    {
                      class: { active: _vm.isActive("feedback") },
                      attrs: { href: "#feedback" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setActive("feedback")
                        }
                      }
                    },
                    [_vm._v("feedback "), _c("hr", { staticClass: "hrtab" })]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-content py-3",
                attrs: { id: "myTabContent" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    class: { "active show": _vm.isActive("regulations") },
                    attrs: { id: "regulations" }
                  },
                  [
                    _c(
                      "div",
                      { attrs: { id: "regulations" } },
                      [
                        _c("RegulationTab", {
                          attrs: {
                            regulations: _vm.regulations,
                            selectedProgram: _vm.selectedProgram,
                            Program: _vm.Program,
                            selectedRegulation: _vm.selectedRegulation,
                            program_id: _vm.program_id,
                            regulation: _vm.regulation,
                            programLevel: _vm.programLevel,
                            program_level: _vm.program_level
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    class: { "active show": _vm.isActive("scheme") },
                    attrs: { id: "scheme" }
                  },
                  [
                    _c(
                      "div",
                      [
                        _c("SchemeTab", {
                          attrs: {
                            regulations: _vm.regulations,
                            selectedProgram: _vm.selectedProgram,
                            Program: _vm.Program,
                            selectedRegulation: _vm.selectedRegulation,
                            program_id: _vm.program_id,
                            regulation: _vm.regulation,
                            programLevel: _vm.programLevel,
                            program_level: _vm.program_level,
                            specializations: _vm.specializations,
                            students: _vm.students,
                            semesters: _vm.semesters
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    class: { "active show": _vm.isActive("subjects") },
                    attrs: { id: "subjects" }
                  },
                  [
                    _c("SubTab", {
                      attrs: {
                        regulations: _vm.regulations,
                        selectedProgram: _vm.selectedProgram,
                        Program: _vm.Program,
                        selectedRegulation: _vm.selectedRegulation,
                        program_id: _vm.program_id,
                        regulation: _vm.regulation,
                        programLevel: _vm.programLevel,
                        program_level: _vm.program_level,
                        specializations: _vm.specializations,
                        students: _vm.students,
                        semesters: _vm.semesters
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    class: { "active show": _vm.isActive("feedback") },
                    attrs: { id: "feedback" }
                  },
                  [_vm._v("\n    feedback tab")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("br")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=template&id=62e321b0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegulationTab.vue?vue&type=template&id=62e321b0& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "regTabWindow" }, [
    _c(
      "div",
      [
        _c("p", { staticClass: "regTitle" }, [
          _vm._v(
            "\r\n            KSRM College of Engineering (Autonomuos), Kadapa-516003, AP "
          ),
          _c("br"),
          _vm._v(
            "\r\n                                " +
              _vm._s(_vm.regulation.name) +
              " ( " +
              _vm._s(_vm.regulation.short_name) +
              " ) "
          ),
          _c("br"),
          _vm._v(
            "\r\n                            (Effective from " +
              _vm._s(_vm.regulation.start_year) +
              ") "
          )
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("b-form-select", {
          staticClass: "mb-3 col-5 select",
          attrs: {
            "disabled-field": "notEnabled",
            options: _vm.items,
            "value-field": "sname",
            "text-field": "name"
          },
          scopedSlots: _vm._u([
            {
              key: "first",
              fn: function() {
                return [
                  _c(
                    "b-form-select-option",
                    { attrs: { value: null, disabled: "", selected: "" } },
                    [_vm._v("Please select an Option")]
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.selectedItem,
            callback: function($$v) {
              _vm.selectedItem = $$v
            },
            expression: "selectedItem"
          }
        }),
        _vm._v(" "),
        _vm.selectedItem == 1
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          : _vm.selectedItem == 2
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "left" } }, [
                _c("ol", [
                  _c("li", [
                    _vm._v(
                      "These rules and regulations may be called as " +
                        _vm._s(_vm.regulation.short_name) +
                        " and come into force\r\nfrom Academic Year " +
                        _vm._s(_vm.regulation.start_year) +
                        " and exist until superseded by new regulations.\r\nThese rules are applicable for students who join the institute from academic\r\nyear " +
                        _vm._s(_vm.regulation.start_year) +
                        " onwards. Students who have joined in earlier regulations will\r\ncontinue in their respective regulations."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "These rules and regulations are applicable to all " +
                        _vm._s(_vm.programLevel[_vm.program_level - 1].name) +
                        " courses in\r\nengineering and technology leading to " +
                        _vm._s(_vm.regulation.program.name) +
                        " (" +
                        _vm._s(_vm.regulation.program.short_name) +
                        ").\r\n"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v("The Major courses offered, at present, are: "),
                    _c(
                      "b",
                      _vm._l(_vm.regulation.program.specializations, function(
                        courses
                      ) {
                        return _c(
                          "ul",
                          {
                            key: courses.name,
                            staticStyle: { "list-style-type": "circle" }
                          },
                          [
                            _c("li", [
                              _vm._v(
                                _vm._s(courses.name) +
                                  " - " +
                                  _vm._s(courses.short_name)
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "The Institute may offer new Majors  in future to which these rules and\r\nregulations will be applicable."
                    )
                  ])
                ])
              ])
            ])
          : _vm.selectedItem == 3
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          : _vm.selectedItem == 4
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          : _vm.selectedItem == 5
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "left" } }, [
                _c(
                  "ol",
                  [
                    _c("li", [
                      _c("b", [_vm._v("Duration:")]),
                      _vm._v(
                        "  The duration of " +
                          _vm._s(_vm.regulation.program.name) +
                          " degree course is " +
                          _vm._s(_vm.getSemCounts()) +
                          " semesters spread\r\nover " +
                          _vm._s(_vm.academicYears()) +
                          "  academic years. \r\nSemesters are named sequentially from " +
                          _vm._s(_vm.regulation.semesters[0].name) +
                          " to " +
                          _vm._s(
                            _vm.regulation.semesters[
                              _vm.regulation.semesters.length - 1
                            ].name
                          ) +
                          "."
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm.programLevel[_vm.program_level - 1].short_name == "UG"
                      ? _c(
                          "li",
                          [
                            _c("b", [_vm._v("Curriculum:")]),
                            _vm._v(
                              "  Each major shall have core, elective and mandatory subjects drawn\r\nfrom " +
                                _vm._s(_vm.curriculumCount()) +
                                " categories of subject areas:\r\n"
                            ),
                            _vm._l(_vm.curriculumCategories, function(
                              categories
                            ) {
                              return _c(
                                "ul",
                                {
                                  key: categories.name,
                                  staticStyle: { "list-style-type": "circle" }
                                },
                                [
                                  _c("li", [
                                    _vm._v(
                                      _vm._s(categories.name) +
                                        "(" +
                                        _vm._s(categories.sname) +
                                        ")"
                                    )
                                  ])
                                ]
                              )
                            }),
                            _vm._v(
                              "\r\n  The curriculum for each Major shall be approved by its corresponding Board of Studies and then by the Academic Council"
                            )
                          ],
                          2
                        )
                      : _c("li", [
                          _c("b", [_vm._v("Curriculum:")]),
                          _vm._v(
                            " Each Specialization shall have core, elective and audit subjects.\r\nThe curriculum for each Specialization shall be approved by its\r\ncorresponding Board of Studies and then by the Academic Council\r\n"
                          )
                        ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("b", [_vm._v("Credits:")]),
                      _vm._v(
                        "  All subjects that are assessed for marks have credits assigned to them. The\r\ncredits assigned to subjects shall be given in curriculum. The total number of credits\r\nfor entire course is " +
                          _vm._s(_vm.regulation.total_credits) +
                          " for all branches."
                      )
                    ]),
                    _vm._v(" "),
                    _vm.regulation.short_name == "R15UG" ||
                    _vm.regulation.short_name == "R14UG" ||
                    _vm.regulation.short_name == "R14PG" ||
                    _vm.regulation.short_name == "R18PG"
                      ? _c("li", [
                          _vm._v(
                            "The distribution of total credits semester-wise is given in the below table"
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.regulation.short_name == "R15UG"
                      ? _c("b-table", {
                          staticClass: "creditsTable",
                          attrs: {
                            striped: "",
                            hover: "",
                            bordered: "",
                            items: _vm.r15ug,
                            fields: _vm.credits_table
                          }
                        })
                      : _vm.regulation.short_name == "R14UG"
                      ? _c("b-table", {
                          staticClass: "creditsTable",
                          attrs: {
                            striped: "",
                            hover: "",
                            bordered: "",
                            items: _vm.r14ug,
                            fields: _vm.credits_table
                          }
                        })
                      : _vm.regulation.short_name == "R14PG"
                      ? _c("b-table", {
                          staticClass: "creditsTable",
                          attrs: {
                            striped: "",
                            hover: "",
                            bordered: "",
                            items: _vm.r14pg,
                            fields: _vm.credits_table
                          }
                        })
                      : _vm.regulation.short_name == "R18PG"
                      ? _c("b-table", {
                          staticClass: "creditsTable",
                          attrs: {
                            striped: "",
                            hover: "",
                            bordered: "",
                            items: _vm.r18pg,
                            fields: _vm.credits_table
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6)
                  ],
                  1
                )
              ])
            ])
          : _vm.selectedItem == 6
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "left" } }, [
                _c("ol", [
                  _c("li", [
                    _vm._v(
                      "Prior to opening of each semester, every student shall register for all the\r\ncredit-bearing and audit subjects listed in curriculum of the semester.\r\nExcepting first semester, the registration for a semester shall be done during\r\na specified week after end examinations of previous semester. In first\r\nsemester, the registration shall be done within six working days from date of\r\nopening. Recommendation of Faculty Advisor is needed for registration"
                    )
                  ]),
                  _vm._v(" "),
                  _vm.regulation.short_name != "R18PG"
                    ? _c("li", [
                        _vm._v(
                          "A student can also register optionally for one self-study subject per term that\r\ndoes not carry any credits. A student can take any subject of any Major as\r\nself-study subject, satisfying any prerequisites if any, on the recommendation\r\nof concerned Faculty Advisor"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Late registration will be permitted with a fine, decided from time to time, up\r\nto six working days from the last date specified for registration"
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "A student will be enrolled and allowed to attend the classes on successful\r\nregistration and payment of necessary fees to Institution, library, and hostel"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Registration and enrolment will be controlled by the Office of the Controller\r\nof Examinations"
                    )
                  ])
                ])
              ])
            ])
          : _vm.selectedItem == 7
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm.regulation.short_name == "R20UG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(8)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R18UG" ||
              _vm.regulation.short_name == "R15UG" ||
              _vm.regulation.short_name == "R14UG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(9)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R14PG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(10)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R18PG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(11)
                  ])
                : _vm._e()
            ])
          : _vm.selectedItem == 8
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _c("div", { staticStyle: { "text-align": "left" } }, [
                _c("ol", [
                  _c("li", [
                    _vm._v(
                      "For all credit-bearing subjects, performance of a student in a subject is indicated by\r\na letter grade that corresponds to absolute marks earned in that subject. Each letter\r\ngrade is assigned a numeric Grade Point that is used to compute Grade Point Average on a scale of 0 to 10"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Performance of a student in both internal assessment and End examination will be\r\nconsidered for awarding grades for credit bearing subjects. Total marks earned in a\r\nsubject is the sum of marks obtained in internal assessment and End examination\r\nin that subject."
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(12),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Grade I will be assigned to a subject if a disciplinary action is pending and is not\r\nresolved before publication of results. Office of Controller of Examinations shall\r\nresolve the pending disciplinary action within six working days from the date of\r\npublication of results and change the grade to any of S to F."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Grade Ab will be assigned to a subject if a student abstains for End examination of\r\nthat subject."
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _vm._v(
                        "The absolute marks and corresponding letter grade and grade points are given in the below tablle\r\n                    "
                      ),
                      _c("b-table", {
                        attrs: {
                          id: "gradesTable",
                          hover: "",
                          striped: "",
                          bordered: _vm.bordered,
                          items: _vm.gradeTableValues,
                          fields: _vm.gradeTableKeys,
                          busy: _vm.isBusy,
                          responsive: ""
                        },
                        on: {
                          "update:busy": function($event) {
                            _vm.isBusy = $event
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(13),
                  _vm._v(" "),
                  _vm._m(14),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Grade Card: All students shall be issued Grade Cards after the publication of results\r\nof a semester. Grade Card is a statement of performance of a student in a semester.\r\nIt contains information about each registered subject: type of subject, allocated\r\ncredits, and letter grade earned. SGPA and CGPA will also be indicated."
                    )
                  ])
                ])
              ])
            ])
          : _vm.selectedItem == 9
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm.regulation.short_name == "R20UG" ||
              _vm.regulation.short_name == "R18UG" ||
              _vm.regulation.short_name == "R18PG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(15)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R15UG" ||
              _vm.regulation.short_name == "R14UG" ||
              _vm.regulation.short_name == "R14PG"
                ? _c("div", [_vm._m(16)])
                : _vm._e()
            ])
          : _vm.selectedItem == 10
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm.regulation.short_name == "R20UG" ||
              _vm.regulation.short_name == "R18UG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(17)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R15UG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(18)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R14UG" ||
              _vm.regulation.short_name == "R18PG" ||
              _vm.regulation.short_name == "R14PG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(19)
                  ])
                : _vm._e()
            ])
          : _vm.selectedItem == 11
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm._m(20)
            ])
          : _vm.selectedItem == 12
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _c("div", { staticStyle: { "text-align": "left" } }, [
                _c("ol", [
                  _c("li", [
                    _vm._v(
                      "Students are eligible to take Supplementary examinations in subjectswith fail\r\ngrade either F or X only."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Supplementary examinations for even semester subjects will be conducted along\r\nwith regular examinations of odd semester subjects."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "Supplementary examinations for odd semester subjects will be conducted along\r\nwith regular examinations of even semester subjects."
                    )
                  ]),
                  _vm._v(" "),
                  _vm.regulation.short_name == "R14UG" ||
                  _vm.regulation.short_name == "R18UG" ||
                  _vm.regulation.short_name == "R20UG" ||
                  _vm.regulation.short_name == "R15UG"
                    ? _c("li", [
                        _vm._v(
                          "\r\nFor eighth semester, special supplementary examinations will be conducted in\r\nsecond week following the results publication date of regular examination of\r\neighth semester\r\n"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "\r\n    A student will be allowed to improve grade in any theory subject provided she or\r\nhe has completed coursework of all semesters but before award of\r\nprovisional/final degree\r\n\r\n"
                    )
                  ])
                ])
              ])
            ])
          : _vm.selectedItem == 13
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm.regulation.short_name == "R15UG" ||
              _vm.regulation.short_name == "R14UG" ||
              _vm.regulation.short_name == "R14PG" ||
              _vm.regulation.short_name == "R18PG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _c("ol", [
                      _c("li", [
                        _vm._v(
                          "Time Limit for completion of requirements for award of degree is " +
                            _vm._s(_vm.getSemCounts()) +
                            "\r\nacademic years from the date of admission. A student who could not\r\ncomplete all the requirements in this time limit shall forego admission and\r\nwill be removed from the rolls of the Institute."
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "A student shall be eligible for award of " +
                            _vm._s(_vm.regulation.program.short_name) +
                            " degree  provided she or he has:\r\n    "
                        ),
                        _c("ol", [
                          _c("li", [
                            _vm._v(
                              "Registered and successfully completed all required credit-bearing and\r\naudit subjects with a total of " +
                                _vm._s(_vm.regulation.total_credits) +
                                " credits."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Secured a CGPA of " +
                                _vm._s(_vm.regulation.pass_cgpa) +
                                " or more."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Cleared all dues to the Institute, library and hostel."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "No disciplinary action is pending against her or him."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Satisfied any other stipulation of the affiliating University."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _vm._v(
                            "Award of Class: Each student will be given class in degree based on CGPA as\r\nfollows:\r\n    "
                          ),
                          _c("br"),
                          _vm._v("Class of Degree \r\n    "),
                          _vm.regulation.short_name == "R14UG" ||
                          _vm.regulation.short_name == "R18UG" ||
                          _vm.regulation.short_name == "R20UG" ||
                          _vm.regulation.short_name == "R15UG"
                            ? _c("b-table", {
                                staticClass: "creditsTable",
                                attrs: {
                                  striped: "",
                                  hover: "",
                                  bordered: "",
                                  items: _vm.ugClassOfDegree,
                                  fields: _vm.ClassOfDegree
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.regulation.short_name == "R18PG"
                            ? _c("b-table", {
                                staticClass: "creditsTable",
                                attrs: {
                                  striped: "",
                                  hover: "",
                                  bordered: "",
                                  items: _vm.pgClassOfDegree,
                                  fields: _vm.ClassOfDegree
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "Consolidated Grade Card and Degree will issued under the seal of affiliating\r\nUniversity"
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R20UG" ||
              _vm.regulation.short_name == "R18UG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _c("ol", [
                      _c("li", [
                        _vm._v(
                          "Time Limit for completion of requirements for award of degree is " +
                            _vm._s(_vm.getSemCounts()) +
                            "\r\nacademic years from the date of admission. A student who could not\r\ncomplete all the requirements in this time limit shall forego admission and\r\nwill be removed from the rolls of the Institute."
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "A student shall be eligible for award of " +
                            _vm._s(_vm.regulation.program.short_name) +
                            " degree  provided she or he has:\r\n    "
                        ),
                        _c("ol", [
                          _c("li", [
                            _vm._v(
                              "Registered and successfully completed all required credit-bearing and\r\naudit subjects with a total of " +
                                _vm._s(_vm.regulation.total_credits) +
                                " credits."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Secured a CGPA of " +
                                _vm._s(_vm.regulation.pass_cgpa) +
                                " or more."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Cleared all dues to the Institute, library and hostel."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "No disciplinary action is pending against her or him."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Satisfied any other stipulation of the affiliating University."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _vm._v(
                            "Award of Class: Each student will be given class in degree based on CGPA as\r\nfollows:\r\n    "
                          ),
                          _c("br"),
                          _vm._v("Class of Degree \r\n    "),
                          _vm.regulation.short_name == "R14UG" ||
                          _vm.regulation.short_name == "R18UG" ||
                          _vm.regulation.short_name == "R20UG" ||
                          _vm.regulation.short_name == "R15UG"
                            ? _c("b-table", {
                                staticClass: "creditsTable",
                                attrs: {
                                  striped: "",
                                  hover: "",
                                  bordered: "",
                                  items: _vm.ugClassOfDegree,
                                  fields: _vm.ClassOfDegree
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.regulation.short_name == "R18PG"
                            ? _c("b-table", {
                                staticClass: "creditsTable",
                                attrs: {
                                  striped: "",
                                  hover: "",
                                  bordered: "",
                                  items: _vm.pgClassOfDegree,
                                  fields: _vm.ClassOfDegree
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(21),
                      _vm._v(" "),
                      _vm._m(22),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "Degree will be issued under the seal of affiliating University."
                        )
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          : _vm.selectedItem == 14
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm._m(23)
            ])
          : _vm.selectedItem == 15
          ? _c("div", [
              _c("b", [
                _c("p", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.selectedItem) +
                      ". " +
                      _vm._s(_vm.items[_vm.selectedItem - 1].name)
                  )
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "line" })
              ]),
              _vm._v(" "),
              _vm.regulation.short_name == "R20UG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(24)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.regulation.short_name == "R18UG"
                ? _c("div", { staticStyle: { "text-align": "left" } }, [
                    _vm._m(25)
                  ])
                : _c("div", { staticStyle: { "text-align": "center" } }, [
                    _c("p", [_vm._v("Details not Available")])
                  ])
            ])
          : _vm.selectedItem == false
          ? _c("div", [_c("p", [_vm._v("Please select any one")])])
          : _c("div", [_c("p", [_vm._v("Details not found")])])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "text-align": "left" } }, [
      _c("ol", [
        _c("li", [
          _c("b", [_vm._v("Academic Year: ")]),
          _vm._v(
            " Period of academic instruction of, approximately, one year\r\nduration that usually starts in June/July and ends in April/May next. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Semester:")]),
          _vm._v("  Either of two divisions of an academic year. ")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Major: ")]),
          _vm._v(" A specific field of study. Example: Civil Engineering. ")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Minor:")]),
          _vm._v(
            " An area outside of, or complementary to, a Major. Example: For Civil\r\nEngineering major, Computer Science is a minor and vice versa. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Subject:")]),
          _vm._v(" An area of knowledge that is studied as part of a Course. ")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Core:")]),
          _vm._v(" A subject that is mandatory for a Major course of study. ")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Elective:")]),
          _vm._v(
            " A subject that is selected for study to suit one’s individual needs"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v(" Audit Subject:")]),
          _vm._v(
            " A subject that is studied to meet certain requirements but has no\r\ncredits assigned to it. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Self-Study Subject: ")]),
          _vm._v(
            "A subject that is learnt by a student on own under the\r\nguidance of a Faculty member. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Humanities:")]),
          _vm._v(
            " Subjects that describe and interpret human achievements,\r\nproblems and historical changes at individual and societal levels covering the\r\ndisciplines of literature, history, and philosophy. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Social Sciences:")]),
          _vm._v(
            " Subjects that describe the mental and behavioural activities of\r\nindividuals, groups, organizations, institutions, and nations covering the\r\ndisciplines of anthropology, economics, linguistics, political science, and\r\npsychology. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Exam:")]),
          _vm._v(
            " A test to measure one’s progress, knowledge, or ability in a subject. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Credit:")]),
          _vm._v(" A numerical weight given to a subject. ")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Grade:")]),
          _vm._v(
            " A numerical or alphabetic designation measuring the level of\r\nachievement in an exam."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Attendance:")]),
          _vm._v(
            " Physical presence of oneself in a classroom/laboratory for\r\npurpose of a scheduled academic instruction. "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Course:")]),
          _vm._v(
            " A series of subjects that constitute a Major field of study. "
          )
        ]),
        _vm._v(" "),
        _c("li", [_c("b", [_vm._v("Branch:")]), _vm._v("  Same as Course. ")]),
        _vm._v(" "),
        _c("li", [_c("b", [_vm._v("Program:")]), _vm._v(" Same as Course. ")]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Degree:")]),
          _vm._v(
            " An academic title conferred to honour distinguished achievement. "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "text-align": "left" } }, [
      _c("ol", [
        _c("li", [
          _vm._v(
            "Academic Council has the authority to suspend a rule temporarily."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("Academic Council has the authority to amend a rule.")
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "For affirmative action on any suspension or amendment of a rule, an affirmative\r\nvote of three-fifths of the members present and voting shall be required in\r\nAcademic Council."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "text-align": "left" } }, [
      _c("ol", [
        _c("li", [
          _vm._v(
            "At present, admissions into first semester of various Specializations are\r\ngoverned by Government and the Affiliating University. The eligibility\r\ncriteria and procedure for admission are prescribed by Government and\r\nAffiliating University."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "A student is not allowed change of Specialization after admission."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "A student must fulfil medical standards required for admission."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "The selected students are admitted into first semester after payment of the prescribed fees."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Working Days:")]),
      _vm._v(
        "  Calendar for any semester shall be announced at least four\r\nweeks before its commencement. Minimum number of working days are 90\r\nfor a semester"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Medium of Instruction:")]),
      _vm._v(
        "  The medium of instruction, examinations and all other\r\nrelated activities is English.\r\n"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Responsibility and Advising:")]),
      _vm._v(
        "\r\n    It is the responsibility of the student to understand and\r\nknow the regulations and requirements to earn the degree. Each student admitted\r\ninto the degree programs is assigned to a Faculty Advisor who assists the student in\r\ndesigning an effective program of study. Students should consult their Faculty\r\nAdvisors for selection of electives and for general advice on academic program.\r\n\r\n"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Gap-Year:")]),
      _vm._v(
        "\r\n    Outstanding students who wish to pursue entrepreneurship are allowed\r\nto take a break of one year at any time after II Year / III Year to pursue\r\nentrepreneurship full time. This period shall be counted for the maximum time for\r\ngraduation. College Academic Council shall evaluate the proposal submitted by\r\nthe student and decide on permitting the student for availing the gap-year. Gapyear can be availed once in the entire course."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _vm._v(
        "A student will be eligible for registration for a term if\r\n            "
      ),
      _c("ol", [
        _c("li", [_vm._v("He/She promoted to that term")]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "He/She has cleared all fees to the Institute, library and hostel of previous term, and "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "He/She is not disqualified for registration by a disciplinary action of the Institute"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { attrs: { start: "selectedItem" } }, [
      _c("li", [
        _vm._v(
          "Performance of students in all subjects is assessed continuously through\r\nassignments, internal assessment tests and an End examination"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          " Allocation of internal assessment and End examination marks\r\n                "
        ),
        _c("ol", [
          _c("li", [
            _vm._v(
              "For theory subjects, the allocation is 30 marks for internal assessment and\r\n70 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory/drawing/project work subjects, the allocation is 40 marks for\r\ninternal assessment and 60 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For seminar/industrial training/internship subjects, the allocation is 100\r\nmarks for internal assessment. There is no end examination for these\r\nsubjects."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For mandatory subjects the allocation is 30 marks for internal assessment\r\nand no allocation for End examination. These marks are specified for\r\npurpose of clause 9.3, and do not account for any credits."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Internal Assessment\r\n                "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "Internal assessment means performance evaluation of students by faculty\r\nmembers who teach the subjects."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Guidelines\r\n                        "),
            _c("ol", { attrs: { type: "a", start: "1" } }, [
              _c("li", [
                _c("b", [_vm._v("Allocation:")]),
                _vm._v(
                  " For theory subjects including mandatory subjects the total\r\ninternal assessment marks is 30 of which 25 marks are assessed through\r\nmidterm tests and 5 marks by assignments. The faculty members of the\r\nconcerned subject will assess the marks in the midterm tests and\r\nassignments."
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Midterm tests:")]),
                _vm._v(
                  " Each midterm test will be of two hours duration and\r\nevaluated for 25 marks. Internal assessment marks for midterm tests will be\r\ncalculated as weighted sum of the two midterm test marks, with 80%\r\nweight for the best and 20% weight for the other marks. Internal\r\nassessment marks for assignments is calculated as the average of all\r\nassignments. Total internal marks are the sum of midterm tests and\r\nassignments assessment marks.\r\nIf any student abstains for any midterm test, she or he will be awarded zero\r\nmarks for that midterm test. If any student fails to submit any assignment\r\nwithin the specified deadline, she or he will be awarded zero marks for that\r\nassignment.\r\n"
                ),
                _c("ol", { attrs: { type: "i", start: "1" } }, [
                  _c("li", [
                    _c("b", [_vm._v("Number and duration:")]),
                    _vm._v(
                      " There shall be two midterm tests each with a\r\nduration of two hours. Time duration for objective part is 20 minutes and\r\nthat for subjective part is 100 minutes.\r\n"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Format of test and division of marks:")]),
                    _vm._v(
                      " Internal test shall consist of two\r\nparts: objective part for 5 marks and subjective part for 20 marks"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Objective part:")]),
                    _vm._v(
                      " Objective part shall contain twenty objective questions. The\r\ntype of questions can be multiple choice, fill the blank, matching etc"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Subjective part:")]),
                    _vm._v(
                      " Subjective part shall contain four questions and all\r\nquestions shall be answered. However, each question can have internal\r\nchoice (either or type question). Generally, each question shall test one\r\nCourse Outcome (CO)."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Syllabus:")]),
                    _vm._v(
                      " Each test shall cover 50% of the syllabus, approximately"
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Assignments:")]),
                _vm._v(
                  " The assignments shall aid and hone the daily routine of students.\r\nAssignments shall be stimulating and thought provoking to the student. While\r\nsome questions may test student’s understanding of the subject, there shall be\r\nquestions that imply connect to real world applications. A variety of questions\r\ncan posed in assignments.\r\n"
                ),
                _c("ol", { attrs: { type: "i", start: "1" } }, [
                  _c("li", [
                    _c("b", [_vm._v("Number:")]),
                    _vm._v(
                      " A minimum of four assignments shall be given in each subject\r\nwith one assignment from Unit I to IV of syllabus of that subject."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Quantum of work:")]),
                    _vm._v(
                      " An assignment shall take about four to six hours of\r\nstudy / work per week. Assignments shall not be overloaded nor under\r\nloaded. As a guideline, each assignment may contain five questions, each\r\nquestion taking an hour to answer."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Marks:")]),
                    _vm._v(
                      " Each assignment must be evaluated for fifty marks. Final marks are\r\nobtained by averaging all the assignment marks and reducing it to five\r\nmarks."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Deadlines:")]),
                    _vm._v(
                      " Students shall be given at least one-week time to complete and\r\nsubmit assignments. Assignments shall be submitted within deadline. Late\r\nsubmissions should be awarded zero marks."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      "General: It is advised to administer assignments using Google Classroom"
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "For laboratory/practical/drawing subjects, the internal assessment will be\r\nbased on regular laboratory work over full semester. The assessment will be\r\ndone by the faculty concerned. The students shall be informed sufficiently\r\nearly of the procedure to be followed for internal assessment. "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For subjects like seminar, project-work, industrial training/internship, and\r\ncomprehensive viva-voce, the internal assessment will be done by a\r\nDepartment Committee consisting of two senior faculty members and\r\nfaculty guide of concerned student. The assessment procedure will be\r\ninformed sufficiently early to the students.\r\n"
            ),
            _c("ol", { attrs: { type: "i", start: "1" } }, [
              _c("li", [
                _c("b", [_vm._v("Mandatory internships:")]),
                _vm._v(" University Guidelines shall apply.")
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Evaluation of internships:")]),
                _vm._v(
                  " Shall be evaluated through the departmental\r\ncommittee. A student will be required to submit a summer internship\r\nreport to the concerned department and appear for an oral presentation\r\nbefore the department committee. The report and the oral presentation\r\nshall carry 40% and 60% weightages respectively."
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Final Semester Internship:")]),
                _vm._v(
                  " A student should mandatorily undergo\r\ninternship (University Guidelines shall apply) and should work\r\nparallelly on a project. At the end of the semester the candidate shall\r\nsubmit an internship completion certificate and a project report. The\r\nproject report shall be evaluated with an external examiner.\r\n"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "After the course work is over, the student is permitted to improve his/her\r\ninternal marks of any 3 theory subjects in the entire course. However\r\nhe/she will have to attend the course work."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("\r\nEnd Examinations\r\n"),
        _c("ol", { attrs: { type: "1", start: "1" } }, [
          _c("li", [
            _vm._v(
              "End examinations shall be conducted after completion of coursework in each\r\nsemester."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "The question papers for theory subjects shall be set by faculty members\r\noutside of the Institute. The external faculty members for question paper\r\nsetting shall be appointed by the Principal."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Evaluation of answer scripts shall be done by either Internal or External\r\nexaminers appointed by the Principal. A minimum of 50% of subjects will be\r\nevaluated by external examiners."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory subjects, end examination shall be conducted by a committee\r\nconsisting of two internal examiners. One examiner shall be appointed by\r\nHead of Department of concerned Major, and the other examiner shall be\r\nappointed by the Principal."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For project work viva-voce, end examination shall be conducted by a\r\ncommittee consisting of one internal examiner, one external examiner, and\r\nthe concerned guide of the student. Internal examiner shall be appointed by\r\nHead of Department of concerned Major, and the external examiner shall be\r\nappointed by the Principal."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              " If a student abstains from End examination of any subject, for any reason, she\r\nor he shall be marked as “ABSENT” in that subject."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("There is no end examination for mandatory subjects")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { attrs: { start: "selectedItem" } }, [
      _c("li", [
        _vm._v(
          "Performance of students in all subjects is assessed continuously through\r\nassignments, internal assessment tests and an End examination"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          " Allocation of internal assessment and End examination marks\r\n                "
        ),
        _c("ol", [
          _c("li", [
            _vm._v(
              "For theory subjects, the allocation is 30 marks for internal assessment and\r\n70 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory/drawing/project work subjects, the allocation is 40 marks for\r\ninternal assessment and 60 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For seminar/industrial training/internship subjects, the allocation is 100\r\nmarks for internal assessment. There is no end examination for these\r\nsubjects."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For mandatory subjects the allocation is 30 marks for internal assessment\r\nand no allocation for End examination. These marks are specified for\r\npurpose of clause 9.3, and do not account for any credits."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Internal Assessment\r\n                "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "Internal assessment means performance evaluation of students by faculty\r\nmembers who teach the subjects."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "\r\n    For each theory subject, including mandatory subjects, the internal\r\nassessment shall be done by two midterm tests for 25 marks and\r\nassignments for 5 marks. The faculty member of the concerned subject\r\nwill assess the marks in midterm tests and assignments. "
            ),
            _c("br"),
            _vm._v(
              "\r\nEach midterm test will be of two hours duration and evaluated for 25\r\nmarks. Internal assessment marks for midterm tests will be calculated as\r\nweighted sum of the two midterm test marks, with 80% weight for the\r\nbest and 20% weight for the other marks. Internal assessment marks for\r\nassignments is calculated as the average of all assignments. Total internal\r\nmarks is the sum of midterm tests and assignments assessment marks. "
            ),
            _c("br"),
            _vm._v(
              "\r\nIf any student abstains for any midterm test, she or he will be awarded\r\nzero marks for that midterm test. If any student fails to submit any\r\nassignment within the specified deadline, she or he will awarded zero\r\nmarks for that assignment.\r\nThe guidelines for internal assessment are given in Annexure 3\r\n"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              " For laboratory/practical/drawing subjects, the internal assessment will\r\nbe based on regular laboratory work over full semester. The assessment\r\nwill be done by the faculty concerned. The students shall be informed\r\nsufficiently early of the procedure to be followed for internal assessment."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For subjects like seminar, project-work, industrial training/internship,\r\nand comprehensive viva-voce, the internal assessment will be done by a\r\nDepartment Committee consisting of two senior faculty members and\r\nfaculty guide of concerned student. The assessment procedure will be\r\ninformed sufficiently early to the students"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("\r\nEnd Examinations\r\n"),
        _c("ol", { attrs: { type: "1", start: "1" } }, [
          _c("li", [
            _vm._v(
              "End examinations shall be conducted after completion of coursework in each\r\nsemester."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "The question papers for theory subjects shall be set by faculty members\r\noutside of the Institute. The external faculty members for question paper\r\nsetting shall be appointed by the Principal."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Evaluation of answer scripts shall be done by either Internal or External\r\nexaminers appointed by the Principal. A minimum of 50% of subjects will be\r\nevaluated by external examiners."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory subjects, end examination shall be conducted by a committee\r\nconsisting of two internal examiners. One examiner shall be appointed by\r\nHead of Department of concerned Major, and the other examiner shall be\r\nappointed by the Principal."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For project work viva-voce, end examination shall be conducted by a\r\ncommittee consisting of one internal examiner, one external examiner, and\r\nthe concerned guide of the student. Internal examiner shall be appointed by\r\nHead of Department of concerned Major, and the external examiner shall be\r\nappointed by the Principal."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              " If a student abstains from End examination of any subject, for any reason, she\r\nor he shall be marked as “ABSENT” in that subject."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("There is no end examination for mandatory subjects")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { attrs: { start: "selectedItem" } }, [
      _c("li", [
        _vm._v(
          "Performance of students in all subjects is assessed continuously through\r\nassignments, internal assessment tests and an End examination"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          " Allocation of internal assessment and End examination marks\r\n                "
        ),
        _c("ol", [
          _c("li", [
            _vm._v(
              "For theory subjects, the allocation is 40 marks for internal assessment and\r\n60 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory/drawing/project work subjects, the allocation is 40 marks for\r\ninternal assessment and 60 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For seminar/viva voce/industrial training subjects’ total 100 marks are\r\nallocated for internal assessment. There shall be no end examination\r\nfor these subjects."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For all audit subjects the allocation is 40 marks for internal assessment\r\nand no allocation for End examination\r\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Internal Assessment Examinations\r\n                    "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "Internal assessment means performance evaluation of students by\r\nfaculty members who teach the subjects"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For theory subjects, including audit subjects, the internal assessment\r\nshall be done by midterm tests. For each subject, two midterm tests will\r\nbe conducted for 40 marks each and the internal assessment mark is the\r\nbetter of two marks. If any student abstains for any midterm test, she or\r\nhe will be awarded zero marks for that midterm test."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory/practical/drawing subjects, the internal assessment will\r\nbe based on regular laboratory work over full term. The assessment will\r\nbe done by the faculty concerned. The students shall be informed\r\nsufficiently early of the procedure to be followed for internal assessment"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For self-study subjects, the assessment is through assignments, quizzes,\r\nseminars and viva-voce. The students shall be informed sufficiently\r\nearly of the procedure to be followed for assessment"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For subjects like seminar, project-work, industrial training, and\r\ncomprehensive viva-voce, the internal assessment will be done by a\r\nconcerned Department Committee consisting of two senior faculty\r\nmembers and faculty guide of concerned student. The assessment\r\nprocedure will be informed sufficiently early to the students"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("End examinations\r\n    "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "End examinations shall be conducted after completion of coursework in\r\neach term"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "The question papers for theory subjects shall be set by faculty members\r\noutside of the Institute. The external faculty members for question paper\r\nsetting will be selected by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Evaluation of answer scripts shall be done by faculty members from\r\noutside of the Institute selected by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory subjects, end examination shall be conducted by a\r\ncommittee consisting of two internal examiners. One examiner shall be\r\nrecommended by Head of Department of concerned Major, and the\r\nother examiner shall be appointed by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For project work viva-voce, End examination shall be conducted by a\r\ncommittee consisting of one internal examiner, one external examiner,\r\nand the concerned guide of the student. Internal examiner shall be\r\nappointed by Head of Department of concerned Major, and the\r\nexternal examiner shall be appointed by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "If a student abstains from End examination of any subject, for any\r\nreason, she or he shall be awarded zero marks in that subject"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "There is no end examination for self-study and audit subjects"
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { attrs: { start: "selectedItem" } }, [
      _c("li", [
        _vm._v(
          "Performance of students in all subjects is assessed continuously through\r\nassignments, internal assessment tests and an End examination"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          " Allocation of internal assessment and End examination marks\r\n                "
        ),
        _c("ol", [
          _c("li", [
            _vm._v(
              "For theory subjects, the allocation is 40 marks for internal assessment and\r\n60 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory/drawing/project work subjects, the allocation is 40 marks for\r\ninternal assessment and 60 marks for End examination totalling 100 marks."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For mini-project/mini-project with seminar total 100 marks are\r\nallocated for internal assessment. There shall be no end examination\r\nfor this mini-project"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For all audit subjects the allocation is 40 marks for internal assessment\r\nand no allocation for End examination\r\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Internal Assessment Examinations\r\n                    "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "Internal assessment means performance evaluation of students by\r\nfaculty members who teach the subjects"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For theory subjects, including audit subjects, the internal assessment\r\nshall be done by midterm tests. For each subject, two midterm tests will\r\nbe conducted for 40 marks each and the internal assessment mark is the\r\nbetter of two marks. If any student abstains for any midterm test, she or\r\nhe will be awarded zero marks for that midterm test."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory/practical/drawing subjects, the internal assessment will\r\nbe based on regular laboratory work over full term. The assessment will\r\nbe done by the faculty concerned. The students shall be informed\r\nsufficiently early of the procedure to be followed for internal assessment"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For self-study subjects, the assessment is through assignments, quizzes,\r\nseminars and viva-voce. The students shall be informed sufficiently\r\nearly of the procedure to be followed for assessment"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For subjects like seminar, project-work, industrial training, and\r\ncomprehensive viva-voce, the internal assessment will be done by a\r\nconcerned Department Committee consisting of two senior faculty\r\nmembers and faculty guide of concerned student. The assessment\r\nprocedure will be informed sufficiently early to the students"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("End examinations\r\n    "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "End examinations shall be conducted after completion of coursework in\r\neach term"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "The question papers for theory subjects shall be set by faculty members\r\noutside of the Institute. The external faculty members for question paper\r\nsetting will be selected by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Evaluation of answer scripts shall be done by faculty members from\r\noutside of the Institute selected by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For laboratory subjects, end examination shall be conducted by a\r\ncommittee consisting of two internal examiners. One examiner shall be\r\nrecommended by Head of Department of concerned Major, and the\r\nother examiner shall be appointed by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "For project work viva-voce, End examination shall be conducted by a\r\ncommittee consisting of one internal examiner, one external examiner,\r\nand the concerned guide of the student. Internal examiner shall be\r\nappointed by Head of Department of concerned Major, and the\r\nexternal examiner shall be appointed by the Principal"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "If a student abstains from End examination of any subject, for any\r\nreason, she or he shall be awarded zero marks in that subject"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "There is no end examination for self-study and audit subjects"
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _vm._v(
        "Pass grade S to E is assigned to a subject based on total marks earned in that\r\nsubject provided that a student earns at least "
      ),
      _c("br"),
      _vm._v(" i) 35% of marks in End examination,\r\nand "),
      _c("br"),
      _vm._v(
        " ii) 40% of marks in internal assessment and End examination put together;\r\notherwise fail grade F will be assigned to that subject.\r\n"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _vm._v(
        "SGPA: Semester Grade Point Average indicates the performance of a student in all\r\ncredit-bearing subjects of a semester. SGPA is calculated as the weighted average of\r\nGrade Points of all subjects of the semester with corresponding credits of subjects\r\nas weights. Audit and Self-study subjects are not considered for SGPA calculation\r\n"
      ),
      _c("br"),
      _c("b", [
        _c("p", { staticStyle: { "text-align": "center" } }, [
          _vm._v("𝑆𝐺𝑃𝐴 = "),
          _c("img", {
            attrs: {
              width: "80",
              height: "45",
              src: __webpack_require__(/*! ../../../public/images/eq1.png */ "./public/images/eq1.png"),
              "v:shapes": "_x0000_i1025"
            }
          })
        ])
      ]),
      _vm._v(" \r\nwhere   𝐺𝑃"),
      _c("sub", [_c("i", [_vm._v("i")])]),
      _vm._v(" = Grade Point earned in a subject "),
      _c("br"),
      _vm._v("\r\nand     𝐶𝑅"),
      _c("sub", [_c("i", [_vm._v("i")])]),
      _vm._v(" = Credits allocated for that subject")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _vm._v(
        "CGPA: Cumulative Grade Point Average indicates the performance of a student in\r\nall semesters up to and including the current semester under consideration. CGPA\r\nis calculated as the weighted average of SGPAs with total credits in each semester\r\nas the weights.\r\n"
      ),
      _c("br"),
      _c("b", [
        _c("p", { staticStyle: { "text-align": "center" } }, [
          _vm._v("C𝐺𝑃𝐴 = "),
          _c("img", {
            attrs: {
              width: "76",
              height: "53",
              src: __webpack_require__(/*! ../../../public/images/eq2.png */ "./public/images/eq2.png"),
              "v:shapes": "_x0000_i1025"
            }
          })
        ])
      ]),
      _vm._v("\r\nwhere S"),
      _c("sub", [_c("i", [_vm._v("i")])]),
      _vm._v(" = SGPA obtained in a semester\r\nand         "),
      _c("br"),
      _vm._v(" TC"),
      _c("sub", [_c("i", [_vm._v("i")])]),
      _vm._v(" = Total Credits for that semester")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", [
      _c("li", [
        _vm._v(
          "A student shall complete all credit-bearing and audit subjects successfully to\r\nbe eligible for award of degree."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Credit-bearing subjects:")]),
        _vm._v(
          " A student is considered to have completed a creditbearing subject successfully and earned credits if she or he obtains a pass\r\ngrade from A+ to D+ in that subject. If a student receives fail grade F or X in\r\nany subject, she or he must register for supplementary End examination for\r\nthat subject as and when opportunity arises and improve grade to pass grade."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Audit subjects:")]),
        _vm._v(
          " A student is considered to have successfully completed an\r\naudit subject if she or he earns at least 40% of marks in internal assessment\r\nmarks. "
        ),
        _c("br"),
        _vm._v(" "),
        _c("b", [_vm._v("Supplementary exam for audit subjects:")]),
        _vm._v(
          " If a student fails in audit subject, she or\r\nhe shall register for supplementary examination in that subject as and when\r\nthe opportunity arises and pass that subject. The supplementary exam will be\r\nconducted for 40 marks covering the entire syllabus and student is deemed to\r\nhave passed in the subject if she or he earns 16 marks (40% marks) in the\r\nsupplementary exam, disregard of her or his performance in internal tests."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", [
      _c("li", [
        _vm._v(
          "A student shall complete all credit-bearing and audit subjects successfully to\r\nbe eligible for award of degree"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Credit-bearing subjects:")]),
        _vm._v(
          " A student is considered to have completed a creditbearing subject successfully and earned credits if she or he obtains a pass\r\ngrade from A+ to D- in that subject. If a student receives fail grade F or X in\r\nany subject, she or he must register for supplementary End examination for\r\nthat subject as and when opportunity arises and improve grade to pass grade."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Audit subjects:")]),
        _vm._v(
          " A student is considered to have successfully completed an\r\naudit subject if she or he earns at least 40% of marks in internal assessment\r\nmarks. A student may request for makeup tests to satisfy this requirement by\r\npaying requisite fee."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Self-study subjects:")]),
        _vm._v(
          " Based on internal assessment, the faculty guide concerned\r\nwill certify whether a student has successfully completed the subject or not.\r\nGrade card will list successfully completed self-study subjects."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", [
      _c("li", [
        _vm._v(
          "A student is eligible to take regular End Examinations of current semester if she or\r\nhe fulfils the attendance requirement."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "A student shall be promoted from current semester to succeeding semester on\r\nsatisfying the attendance and total credits-earned requirements."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Attendance Requirement")]),
        _vm._v(" "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "Attendance of students shall be recorded for credit-bearing and mandatory\r\nsubjects as per the work load indicated in curriculum."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Total class-periods conducted shall be reckoned from beginning to end of a\r\nsemester as published in academic calendar.\r\n"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Aggregate Percentage of Attendance is calculated using total number of\r\nclass-periods attended as numerator and total number of class-periods\r\nconducted for the concerned semester as the denominator."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "A minimum aggregate attendance of 75% is required for promotion to\r\nsucceeding semester and be eligible to take End examinations of current\r\nsemester. In addition, student has to acquire a minimum of 40% attendance\r\nin each subject."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "A student can appeal to the Principal for condoning deficiency in aggregate\r\nattendance if she or he gets an aggregate attendance of 65% or more but less\r\nthan the required 75%, presenting a valid reason for deficiency. Such a\r\nstudent will be granted promotion if the Principal pardons the deficiency.\r\nPrincipal has the right to reject the appeal if he/she is not satisfied with the\r\nperformance of the student or the reason cited for deficiency of the\r\nattendance."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              " A student earning less than 65% aggregate attendance will be denied\r\npromotion. A student who is not promoted on basis of attendance shall be\r\nremoved from the rolls and shall register for the same semester when\r\nopportunity arises. The current semester record of the student is cancelled\r\nautomatically."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [_c("b", [_vm._v("Credits-Earned Requirement")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _vm._v(
            " This rule is applicable for promotion of a student from fourth semester to\r\nfifth semester, and from sixth semester to seventh semester"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "A student who is denied promotion for want of requisite credits shall take\r\nsupplementary examinations, as and when offered, and earn credits to be\r\neligible for promotion."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Subjects registered for honours/minor degree shall not be considered\r\ntowards credits-earned requirement."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "For promotion from fourth semester to fifth semester, a student must earn at\r\nleast 40% credits (rounded to lower integer) from first semester to third\r\n9\r\nsemester subjects. A student will get the following opportunities to pass the\r\nsubjects:\r\n"
          ),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("First semester subjects :")]),
          _vm._v(" One regular and three supplementary exams "),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("Second semester subjects :")]),
          _vm._v(" One regular and two supplementary exams "),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("Third semester subjects :")]),
          _vm._v(" One regular and one supplementary exam")
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "For promotion from sixth semester to seventh semester, a student must earn\r\nat least 40% credits (rounded to lower integer) from first semester to fifth\r\nsemester subjects. A student will get the following opportunities to pass the\r\nsubjects: "
          ),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("First semester subjects :")]),
          _vm._v(" One regular and five supplementary exams "),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("Second semester subjects :")]),
          _vm._v(" One regular and four supplementary exams "),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("Third semester subjects :")]),
          _vm._v(" One regular and three supplementary exams "),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("Fourth semester subjects :")]),
          _vm._v(" One regular and two supplementary exams "),
          _c("br"),
          _vm._v(" "),
          _c("b", [_vm._v("Fifth semester subjects :")]),
          _vm._v(" One regular and one supplementary exam")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", [
      _c("li", [
        _vm._v(
          "A student is eligible to take regular End Examinations of current semester if she or\r\nhe fulfils the attendance requirement."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "A student shall be promoted from current semester to succeeding semester on\r\nsatisfying the attendance and total credits-earned requirements."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Attendance Requirement")]),
        _vm._v(" "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "Attendance of students shall be recorded for credit-bearing and mandatory\r\nsubjects as per the work load indicated in curriculum."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Total class-periods conducted shall be reckoned from beginning to end of a\r\nsemester as published in academic calendar.\r\n"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Aggregate Percentage of Attendance is calculated using total number of\r\nclass-periods attended as numerator and total number of class-periods\r\nconducted for the concerned semester as the denominator."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "A minimum aggregate attendance of 75% is required for promotion to\r\nsucceeding semester and be eligible to take End examinations of current\r\nsemester. In addition, student has to acquire a minimum of 40% attendance\r\nin each subject."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "A student can appeal to the Principal for condoning deficiency in aggregate\r\nattendance if she or he gets an aggregate attendance of 65% or more but less\r\nthan the required 75%, presenting a valid reason for deficiency. Such a\r\nstudent will be granted promotion if the Principal pardons the deficiency.\r\nPrincipal has the right to reject the appeal if he/she is not satisfied with the\r\nperformance of the student or the reason cited for deficiency of the\r\nattendance."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              " A student earning less than 65% aggregate attendance will be denied\r\npromotion. A student who is not promoted on basis of attendance shall be\r\nremoved from the rolls and shall register for the same semester when\r\nopportunity arises. The current semester record of the student is cancelled\r\nautomatically."
            )
          ])
        ])
      ]),
      _c("li", [_c("b", [_vm._v("Credits-Earned Requirement")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _vm._v(
            " This rule is applicable for promotion of a student from fourth semester to\r\nfifth semester, and from sixth semester to seventh semester"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "A student who is denied promotion for want of requisite credits shall take\r\nsupplementary examinations, as and when offered, and earn credits to be\r\neligible for promotion."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "For promotion from fourth semester to fifth semester, a student must\r\nearn at least 26 credits from first semester to third semester subjects"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "For promotion from sixth semester to seventh semester, a student must\r\nearn at least 44 credits from first semester to fifth semester subjects"
          )
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "A student can forego promotion and opt to repeat the current semester on\r\nwritten request. Recommendation of the concerned Faculty Advisor is\r\nrequired for cancellation of promotion. This option shall be exercised before\r\nthe commencement of the End examinations of the current semester."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", [
      _c("li", [
        _vm._v(
          "A student is eligible to take regular End Examinations of current semester if\r\nshe or he full fills the attendance requirement"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "A student shall be promoted from current semester to succeeding semester\r\non satisfying the attendance requirement"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "A student shall complete all credit-bearing and audit subjects successfully\r\nbefore taking End examination for project viva-voce"
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Attendance Requirement\r\n    "),
        _c("ol", [
          _c("li", [
            _vm._v(
              "Attendance of students shall be recorded for credit-bearing and audit\r\nsubjects as per the workload indicated in curriculum."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Total class-periods conducted shall be reckoned from beginning to\r\nend of a semester as published in academic calendar."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Aggregate Percentage of Attendance is calculated using total number\r\nof class-periods attended as numerator and total number of classperiods conducted for the concerned subject as the denominator."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "A minimum aggregate attendance of 75% is required for promotion to\r\nsucceeding semester."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "A student can appeal to the Principal for condoning deficiency in\r\naggregate attendance if she or he gets 65% or more aggregate\r\nattendance presenting a valid reason for deficiency. Such a student\r\nwill be granted promotion if the Principal pardons the deficiency.\r\nPrincipal has the right to reject the appeal if it is not satisfied with the\r\nperformance of the student or the reason cited for deficiency of the\r\nattendance."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "A student earning less than 75% aggregate attendance will be denied\r\npromotion. A student who is not promoted on basis of attendance\r\nshall be removed from the rolls and shall register for the same\r\nsemester when opportunity arises. The current semester record of\r\nthe student is cancelled automatically."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "A student can forego promotion and opt to repeat the current term on written\r\nrequest. Recommendation of the concerned Faculty Advisor is required for\r\ncancellation of promotion. This option shall be exercised before the\r\ncommencement of the End examinations of the current term."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "text-align": "left" } }, [
      _c("ol", [
        _c("li", [
          _vm._v(
            "Revaluation of End Examination scripts is allowed for theory subjects only\r\nby paying requisite fee."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "A Procedure for Revaluation: The script will be revaluated by an examiner\r\nappointed by the Principal. The maximum of revaluation and regular end\r\nexamination marks will be awarded for that subject"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(" A student can apply for revaluation in a subject only once.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Degree with Honours designation:")]),
      _vm._v(
        " Students with higher learning capabilities\r\nare encouraged to opt for Honours designation. Degree with Honours\r\nimply a higher level of academic achievement. A student can earn B.Tech\r\ndegree with honours designation by meeting the following requirements\r\n"
      ),
      _c("ol", [
        _c("li", [
          _vm._v(
            "Honours designation is optional. A student can opt for either Honours\r\ndesignation or Minor degree (clause 13.5) but not both."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Entry eligibility:")]),
          _vm._v(
            " Students shall apply for Honours designation at the\r\nbeginning of the fourth semester. Eligibility criteria are (i) minimum\r\nCGPA of 8.0 and (ii) no backlogs, reckoned up to second semester. The\r\nChairperson of the concerned Board of Studies will process the\r\napplications and publish the list of eligible students."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Additional course work:")]),
          _vm._v(
            " Students shall complete an additional 20-credits\r\ncoursework, in addition to 160 regular credits, in her/his own major\r\nduring fourth to seventh semesters. The Board of Studies (BoS) of the\r\nconcerned major shall specify the list of advanced elective subjects for the\r\npurpose of honours designation. "
          ),
          _c("br"),
          _vm._v(
            "\r\nOut of the 20 additional credits to be acquired, 16 credits shall be earned\r\nby undergoing specified courses listed as pools, with four courses, each\r\ncarrying 4 credits. The remaining 4 credits must be acquired through two\r\nMOOCs, which shall be domain specific, each with 2 credits and with a\r\nminimum duration of 8/12 weeks as recommended by the BoS. "
          ),
          _c("br"),
          _vm._v(
            "\r\nIf minimum enrolments criteria are not met then the students shall be\r\npermitted to register for the equivalent MOOC courses as approved by the\r\nconcerned Head of the department in consultation with BoS. "
          ),
          _c("br"),
          _vm._v(
            "\r\nIf a student drops or is terminated from the Honours program, the\r\nadditional credits earned so far will remain extra. These additional courses\r\nwill find mention in the transcript but not in the degree certificate."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Registration and enrollment:")]),
          _vm._v(" Clause 6.0 shall apply")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Evaluation:")]),
          _vm._v(" The evaluation shall be as per clause 7.0")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Continuous performance:")]),
          _vm._v(
            " Students shall earn a minimum SGPA of 8.0 in all\r\nsemesters, from fourth to seventh, and without backlogs to be eligible for\r\naward of Honours designation. Regular and additional subjects shall be\r\nconsidered for SGPA calculation. If a student does not get a minimum\r\nSGPA of 8.0 or fails in any subject during fourth to seventh semesters,\r\nshe/he will lose candidature for honours designation"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Minor Degree designation:")]),
      _vm._v(
        " Students with higher learning capabilities are\r\nencouraged to opt for Minor degree designation. Minor degree imply a higher\r\nlevel of academic achievement and improves employability. A student can earn\r\nminor degree designation by meeting the following requirements\r\n"
      ),
      _c("ol", [
        _c("li", [
          _vm._v(
            "Minor degree is optional. A student can opt for either Minor degree or\r\nHonours designation (clause 13.4) but not both.\r\n        "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Entry eligibility:")]),
          _vm._v(
            " Students shall apply for minor degree at the beginning of\r\nfourth semester. Eligibility criteria are (i) minimum CGPA of 8.0 and (ii)\r\nno backlogs, reckoned up to second semester. The Chairperson of the\r\nconcerned Board of Studies (minor department) will process the\r\napplications and publish the list of eligible students."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Additional coursework:")]),
          _vm._v(
            " Students shall complete an additional 20-credits\r\ncoursework, in addition to 160 regular credits, in selected minor program\r\nduring fourth to seventh semesters. The Board of Studies (BoS) of the\r\nconcerned minor program shall specify the list of core and elective subjects\r\nfor the purpose of minor degree. Out of the 20 credits, 16 credits shall be\r\nearned by undergoing specified courses listed by the concerned BoS and\r\nmust pursue atleast 2 courses through MOOCs. (of 8 week duration)"
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Registration and enrollment:")]),
          _vm._v(" Clause 6.0 shall apply.")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Evaluation:")]),
          _vm._v(" The evaluation shall be as per clause 7.0")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", [_vm._v("Continuous performance:")]),
          _vm._v(
            " Students shall earn a minimum SGPA of 8.0 in all\r\nsemesters, from fourth to seventh, and without backlogs to be eligible for\r\naward of minor degree. Regular and additional subjects shall be considered\r\nfor SGPA calculation. If a student does not get a minimum SGPA of 8.0 or\r\nfails in any subject during fourth to seventh semesters, she/he will lose\r\ncandidature for minor degree.\r\n"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "text-align": "left" } }, [
      _c("ol", [
        _c("li", [
          _vm._v(
            "A student who initially joins the Institute in a previous Regulation and has to rejoin in a semester of the present Regulations, due to any reason, shall be bound by\r\nthe rules of the current Regulations. Board of Studies of the concerned Major will\r\nspecify, extra or otherwise, academic coursework to be undertaken by such\r\nstudents who join the current Regulations."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { attrs: { type: "1", start: "1" } }, [
      _c("li", [
        _c("b", [_vm._v(" Title and application:")]),
        _vm._v(
          " These rules and regulations may be called R20UG-LE and\r\ncome into force from academic year 2021-22 and exist in force until superseded by\r\nother regulations. These regulations are applicable to students admitted under\r\nlateral entry scheme leading to Bachelor’s Degree in Technology (B.Tech)."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Regulations and curriculum:")]),
        _vm._v(
          " The regulations and curriculum of R20UG shall be\r\napplicable in general with the following modifications:\r\n"
        ),
        _c("ol", { attrs: { type: "i", start: "1" } }, [
          _c("li", [
            _c("b", [_vm._v("Entry and duration:")]),
            _vm._v(
              " The students will be admitted directly into third semester of\r\nregular 4-year B.Tech degree course governed by R20UG regulations. The\r\nduration of the course is three academic years."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Curriculum:")]),
            _vm._v(" Third semester to eighth semester curriculum of R20UG.")
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Promotion by credits-earned requirement:")]),
            _vm._v(
              " This is applicable for the promotion of a\r\nstudent from sixth semester to seventh semester only. She/he must earn at\r\nleast 40% of total credits (rounded to lower integer) from third to fifth\r\nsemesters for promotion from sixth semester to seventh semester."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Requirements for the award of B.Tech degree:\r\n"),
        _c("ol", { attrs: { start: "i" } }, [
          _c("li", [
            _vm._v(
              "Time limit for completion of requirements for award of degree is six academic\r\nyears from the date of admission"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Registered and successfully completed all required credit-bearing and\r\nmandatory subjects with a total of 121 credits. (third semester to eighth\r\nsemester subjects)"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("i", [_vm._v("Honours/minors designation:")]),
            _vm._v(" shall earn extra 20 credits in addition to 121 credits")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { attrs: { type: "1", start: "1" } }, [
      _c("li", [
        _c("b", [_vm._v(" Title and application:")]),
        _vm._v(
          " These rules and regulations may be called R18UG-LE and\r\ncome into force from academic year 2019-20 and exist in force until superseded by\r\nother regulations. These regulations are applicable to students admitted under\r\nlateral entry scheme leading to Bachelor’s Degree in Technology (B.Tech)."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("b", [_vm._v("Regulations and curriculum:")]),
        _vm._v(
          " The regulations and curriculum of R18UG shall be\r\napplicable in general with the following modifications:\r\n"
        ),
        _c("ol", { attrs: { type: "i", start: "1" } }, [
          _c("li", [
            _c("b", [_vm._v("Entry and duration:")]),
            _vm._v(
              " The students will be admitted directly into third semester of\r\nregular 4-year B.Tech degree course governed by R18UG regulations. The\r\nduration of the course is three academic years."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Curriculum:")]),
            _vm._v(" Third semester to eighth semester curriculum of R18UG.")
          ]),
          _vm._v(" "),
          _c("li", [
            _c("b", [_vm._v("Promotion by credits-earned requirement:")]),
            _vm._v(
              " This is applicable for the promotion of a\r\nstudent from sixth semester to seventh semester only. She/he must earn at\r\nleast 40% of total credits (rounded to lower integer) from third to fifth\r\nsemesters for promotion from sixth semester to seventh semester."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Requirements for the award of B.Tech degree:\r\n"),
        _c("ol", { attrs: { type: "i" } }, [
          _c("li", [
            _vm._v(
              "Time limit for completion of requirements for award of degree is six academic\r\nyears from the date of admission"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Registered and successfully completed all required credit-bearing and\r\nmandatory subjects with a total of 122 credits. (third semester to eighth\r\nsemester subjects)"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("i", [_vm._v("Honours/minors designation:")]),
            _vm._v(" shall earn extra 20 credits in addition to 122 credits")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "In case of ambiguity in the interpretation of regulations, the decision of the academic\r\ncouncil shall be final"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=template&id=4dc445d5&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SchemeTab.vue?vue&type=template&id=4dc445d5& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-seondary", attrs: { id: "schemeTab" } },
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c(
            "div",
            {
              staticClass:
                " text-left col-md-2 col-lg-1 text-light offset-lg-2 offset-md-1 pt-2"
            },
            [_vm._v("Specialization: ")]
          ),
          _vm._v(" "),
          _vm.specializations.length > 1
            ? _c("b-form-select", {
                staticClass: "col-md-5 col-lg-5 mb-3",
                attrs: {
                  "disabled-field": "notEnabled",
                  options: _vm.specializations,
                  "value-field": "id",
                  "text-field": "name"
                },
                on: {
                  change: function($event) {
                    return _vm.getSpecId($event)
                  }
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "first",
                      fn: function() {
                        return [
                          _c(
                            "b-form-select-option",
                            {
                              attrs: { value: null, disabled: "", selected: "" }
                            },
                            [_vm._v("Please select a Specialization")]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  false,
                  3331375407
                ),
                model: {
                  value: _vm.selectedDept,
                  callback: function($$v) {
                    _vm.selectedDept = $$v
                  },
                  expression: "selectedDept"
                }
              })
            : _c("div", { staticClass: "text-light  pt-2" }, [
                _vm._v("Not Found")
              ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.selectedDept
        ? _c(
            "div",
            { staticClass: "row" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "text-left col-md-2 col-lg-1 text-light offset-lg-2 offset-md-1 pt-2"
                },
                [_vm._v("Semester: ")]
              ),
              _vm._v(" "),
              _vm.semesters.length > 1
                ? _c("b-form-select", {
                    staticClass: "col-md-5 col-lg-5 mb-3",
                    attrs: {
                      "disabled-field": "notEnabled",
                      options: _vm.semesters,
                      "value-field": "semester_number",
                      "text-field": "name"
                    },
                    on: {
                      change: function($event) {
                        return _vm.getScheme($event)
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "first",
                          fn: function() {
                            return [
                              _c(
                                "b-form-select-option",
                                {
                                  attrs: {
                                    value: null,
                                    disabled: "",
                                    selected: ""
                                  }
                                },
                                [_vm._v("Please select a Specialization")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      false,
                      3331375407
                    ),
                    model: {
                      value: _vm.selectedSem,
                      callback: function($$v) {
                        _vm.selectedSem = $$v
                      },
                      expression: "selectedSem"
                    }
                  })
                : _c("div", { staticClass: "text-light  pt-2" }, [
                    _vm._v("Not Found")
                  ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.selectedDept && _vm.selectedSem
        ? _c(
            "div",
            { staticClass: "offset-md-3" },
            [
              _c(
                "b-row",
                { staticClass: "text-left mr-3" },
                [
                  _c("b-col", { staticClass: "col-2" }, [_vm._v("Code")]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-md-3" }, [_vm._v("Title ")]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-2" }, [_vm._v("Category")]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-2" }, [_vm._v("L-T-P")]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-1" }, [_vm._v("IM")]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-1" }, [_vm._v("EM")]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-1" }, [_vm._v("Cr")])
                ],
                1
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "hr_scheme" }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm._l(_vm.scheme, function(subject) {
                return _c("div", { key: subject.id }, [
                  subject.specialization_id == _vm.selectedDept &&
                  subject.semester_id == _vm.selectedSem
                    ? _c(
                        "div",
                        _vm._l(subject.subjects, function(sub) {
                          return _c(
                            "div",
                            { key: sub.id },
                            [
                              _c(
                                "b-row",
                                { staticClass: "text-left mr-3" },
                                [
                                  _c("b-col", { staticClass: "col-2" }, [
                                    _vm._v(_vm._s(sub.code))
                                  ]),
                                  _vm._v(" "),
                                  _c("b-col", { staticClass: "col-md-3" }, [
                                    _vm._v(" " + _vm._s(sub.name) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("b-col", { staticClass: "col-2" }, [
                                    _vm._v(
                                      _vm._s(
                                        subject.subject_category.short_name
                                      ) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("b-col", { staticClass: "col-2" }, [
                                    _vm._v(
                                      _vm._s(subject.scheme.lectures) +
                                        "-" +
                                        _vm._s(subject.scheme.tutorials) +
                                        "-" +
                                        _vm._s(subject.scheme.practicals)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("b-col", { staticClass: "col-1" }, [
                                    _vm._v(
                                      _vm._s(subject.scheme.internal_marks)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("b-col", { staticClass: "col-1" }, [
                                    _vm._v(_vm._s(subject.scheme.end_marks))
                                  ]),
                                  _vm._v(" "),
                                  _c("b-col", { staticClass: "col-1" }, [
                                    _vm._v(_vm._s(subject.scheme.credits))
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ])
              }),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-5 comment" },
                [
                  _c(
                    "b-card-group",
                    { attrs: { deck: "" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "text-left text-dark",
                          attrs: {
                            "bg-variant": "default",
                            header: "Leave your comments here"
                          }
                        },
                        [
                          _c(
                            "form",
                            {
                              attrs: { novalidate: "true" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.addComment.apply(null, arguments)
                                }
                              }
                            },
                            [
                              _c(
                                "b-row",
                                [
                                  _c("b-col", { attrs: { md: "3 pt-2" } }, [
                                    _c("p", [_vm._v("Email:")])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "" } },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          name: "email",
                                          state: _vm.emailValidator,
                                          trim: "",
                                          "aria-describedby":
                                            "input-live-help input-live-feedback",
                                          type: "email",
                                          id: "email",
                                          placeholder: "example@ksrmce.ac.in",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.email,
                                          callback: function($$v) {
                                            _vm.email = $$v
                                          },
                                          expression: "email"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-invalid-feedback",
                                        {
                                          attrs: { id: "input-live-feedback" }
                                        },
                                        [
                                          _vm._v(
                                            "\n      Enter Valid Email\n    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-row",
                                { staticClass: "pt-4" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "3 pt-2 pl-2" } },
                                    [_c("p", [_vm._v("Comment:")])]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "" } },
                                    [
                                      _c("b-form-textarea", {
                                        attrs: {
                                          type: "comment",
                                          id: "comment",
                                          placeholder: "Your Comment",
                                          required: ""
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "mt-4",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v("Submit")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.selectedDept && _vm.selectedSem
        ? _c("p", { staticClass: "text-left pl-5 text-light" }, [
            _vm._v(
              "Note: Code : Subject Code, Title : Name of the Subject, Category : Subject Category Short Name, L-T-P : Lecture Hours-Tutorial Hours-Practical Hours, Cr : Credits for the respective subject."
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=template&id=74d42640&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SubTab.vue?vue&type=template&id=74d42640& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "subjects" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "div",
          {
            staticClass:
              " text-left col-md-2 col-lg-1 text-   offset-lg-2 offset-md-1 pt-2"
          },
          [_vm._v("Subject: ")]
        ),
        _vm._v(" "),
        _vm.subjects
          ? _c("b-form-select", {
              staticClass: "col-md-5 col-lg-5 ",
              attrs: {
                "disabled-field": "notEnabled",
                options: _vm.subjects,
                "value-field": "id",
                "text-field": "name"
              },
              on: {
                change: function($event) {
                  return _vm.getSyllabus($event)
                }
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "first",
                    fn: function() {
                      return [
                        _c(
                          "b-form-select-option",
                          {
                            attrs: { value: null, disabled: "", selected: "" }
                          },
                          [_vm._v("Please select a Subject")]
                        )
                      ]
                    },
                    proxy: true
                  }
                ],
                null,
                false,
                4165578364
              ),
              model: {
                value: _vm.selectedSub,
                callback: function($$v) {
                  _vm.selectedSub = $$v
                },
                expression: "selectedSub"
              }
            })
          : _c("div", { staticClass: "  pt-2" }, [_vm._v("Not Found")])
      ],
      1
    ),
    _vm._v(" "),
    _vm.selectedSub
      ? _c("div", { staticClass: "pt-3" }, [
          _c("div", { staticClass: "text-left row" }, [
            _c("div", { staticClass: "col-2 offset-md-3" }, [_vm._v("CODE")]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 text-uppercase " }, [
              _vm._v(
                _vm._s(
                  _vm.subjects
                    ? _vm.subjects[_vm.selectedSub - 1].code
                    : "Not found"
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-left row" }, [
            _c("div", { staticClass: "col-2 offset-md-3" }, [
              _vm._v("DEPARTMENT")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-5 text-uppercase" }, [
              _vm._v(
                _vm._s(_vm.departments ? _vm.departments.name : "Not found")
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-left row" }, [
            _c("div", { staticClass: "col-2 offset-md-3" }, [
              _vm._v("OFFICE EMAIL")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2  text-uppercase " }, [
              _vm._v(
                _vm._s(
                  _vm.departments ? _vm.departments.office_email : "Not found"
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-left row" }, [
            _c("div", { staticClass: "col-2 offset-md-3" }, [
              _vm._v("HOD EMAIL")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3 text-uppercase " }, [
              _vm._v(
                _vm._s(
                  _vm.departments ? _vm.departments.hod_email : "Not found"
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-left row" }, [
            _c("div", { staticClass: "col-2 offset-md-3" }, [
              _vm._v("INSTRUCTION")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3 text-uppercase " }, [
              _vm._v(
                _vm._s(
                  _vm.subjects
                    ? (_vm.subjects[_vm.selectedSub - 1].is_theory
                        ? "Theory"
                        : "") +
                        "" +
                        (_vm.subjects[_vm.selectedSub - 1].is_lab
                          ? "Laboratory"
                          : "") +
                        "" +
                        (_vm.subjects[_vm.selectedSub - 1].is_project
                          ? "Project"
                          : "")
                    : "Not found"
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-left row" },
            [
              _c("div", { staticClass: "col-2 offset-md-3" }, [
                _vm._v("RATING")
              ]),
              _vm._v(" "),
              _c("b-form-rating", {
                staticClass: "Subrating col-2 ",
                attrs: {
                  readonly: "",
                  "no-border": "",
                  size: "sm",
                  variant: "warning",
                  color: "white"
                },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", { staticClass: "pt-1 pr-4" }, [
                  _vm._v(_vm._s(_vm.ratingCount) + " reviews")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "explore offset-md-2" }, [
            _c(
              "div",
              { staticClass: "col-10", attrs: { id: "syllabus" } },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "text-left card",
                    attrs: { "text-variant": "white" }
                  },
                  [
                    _c(
                      "b-card-text",
                      [
                        _vm._v("Syllabus\n                            "),
                        _c(
                          "svg",
                          {
                            staticClass: "h-1 w-1 ml-1 cursor-pointer icon ",
                            attrs: {
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            },
                            on: {
                              click: function($event) {
                                _vm.showSyllabus = !_vm.showSyllabus
                              }
                            }
                          },
                          [
                            _vm.showSyllabus
                              ? _c("path", {
                                  staticClass: "up",
                                  attrs: { d: "M5 15l7-7 7 7" }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.showSyllabus
                              ? _c("path", {
                                  staticClass: "down",
                                  attrs: { d: "M19 9l-7 7-7-7" }
                                })
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("transition", { attrs: { name: "slide-fade" } }, [
                          _vm.syllabus
                            ? _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showSyllabus,
                                    expression: "showSyllabus"
                                  }
                                ],
                                staticClass: "mt-3 text-dark",
                                domProps: { innerHTML: _vm._s(this.syllabus) }
                              })
                            : _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.showSyllabus,
                                      expression: "showSyllabus"
                                    }
                                  ],
                                  staticClass: "mt-3"
                                },
                                [_vm._v(" Not Found ")]
                              )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "explore offset-md-2" }, [
            _c(
              "div",
              { staticClass: "col-10", attrs: { id: "resources" } },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "text-left card",
                    attrs: { "text-variant": "white" }
                  },
                  [
                    _c(
                      "b-card-text",
                      [
                        _vm._v("Resources\n                            "),
                        _c(
                          "svg",
                          {
                            staticClass: "h-1 w-1 ml-1 cursor-pointer icon ",
                            attrs: {
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            },
                            on: {
                              click: function($event) {
                                _vm.showResources = !_vm.showResources
                              }
                            }
                          },
                          [
                            _vm.showResources
                              ? _c("path", {
                                  staticClass: "up",
                                  attrs: { d: "M5 15l7-7 7 7" }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.showResources
                              ? _c("path", {
                                  staticClass: "down",
                                  attrs: { d: "M19 9l-7 7-7-7" }
                                })
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("transition", { attrs: { name: "slide-fade" } }, [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showResources,
                                  expression: "showResources"
                                }
                              ],
                              staticClass: "mt-3 text-dark"
                            },
                            [_c("p", [_vm._v(" Resources here")])]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "explore offset-md-2" }, [
            _c(
              "div",
              { staticClass: "col-10", attrs: { id: "performence" } },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "text-left card",
                    attrs: { "text-variant": "white" }
                  },
                  [
                    _c(
                      "b-card-text",
                      [
                        _vm._v("Performance\n                            "),
                        _c(
                          "svg",
                          {
                            staticClass: "h-1 w-1 ml-1 cursor-pointer icon ",
                            attrs: {
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            },
                            on: {
                              click: function($event) {
                                _vm.showPerformance = !_vm.showPerformance
                              }
                            }
                          },
                          [
                            _vm.showPerformance
                              ? _c("path", {
                                  staticClass: "up",
                                  attrs: { d: "M5 15l7-7 7 7" }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.showPerformance
                              ? _c("path", {
                                  staticClass: "down",
                                  attrs: { d: "M19 9l-7 7-7-7" }
                                })
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("transition", { attrs: { name: "slide-fade" } }, [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showPerformance,
                                  expression: "showPerformance"
                                }
                              ],
                              staticClass: "mt-3 text-dark"
                            },
                            [_c("p", [_vm._v(" Performance here")])]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "explore offset-md-2" }, [
            _c(
              "div",
              { staticClass: "col-10", attrs: { id: "reviews" } },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "text-left card",
                    attrs: { "text-variant": "white" }
                  },
                  [
                    _c(
                      "b-card-text",
                      [
                        _vm._v("Reviews\n                            "),
                        _c(
                          "svg",
                          {
                            staticClass: "h-1 w-1 ml-1 cursor-pointer icon ",
                            attrs: {
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            },
                            on: {
                              click: function($event) {
                                _vm.showReviews = !_vm.showReviews
                              }
                            }
                          },
                          [
                            _vm.showReviews
                              ? _c("path", {
                                  staticClass: "up",
                                  attrs: { d: "M5 15l7-7 7 7" }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.showReviews
                              ? _c("path", {
                                  staticClass: "down",
                                  attrs: { d: "M19 9l-7 7-7-7" }
                                })
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("transition", { attrs: { name: "slide-fade" } }, [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showReviews,
                                  expression: "showReviews"
                                }
                              ],
                              staticClass: "mt-3 offset-md-1 text-dark"
                            },
                            [
                              _c("p", [
                                _vm._v("To give Rating for "),
                                _c("b", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.subjects[_vm.selectedSub - 1].name
                                    )
                                  )
                                ]),
                                _vm._v(" , Plese fill the below form")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-card-group",
                                {
                                  staticClass: "col-md-12 col-lg-10",
                                  attrs: { deck: "" }
                                },
                                [
                                  _c(
                                    "b-card",
                                    {
                                      staticClass: "text-left text-dark ",
                                      attrs: {
                                        "bg-variant": "default",
                                        header: "Leave your rating here"
                                      }
                                    },
                                    [
                                      _c(
                                        "form",
                                        {
                                          on: {
                                            submit: function($event) {
                                              $event.preventDefault()
                                              return _vm.addRating.apply(
                                                null,
                                                arguments
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "b-row",
                                            [
                                              _c(
                                                "b-col",
                                                { staticClass: "col-5 pt-3 " },
                                                [_vm._v("Email:")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-col",
                                                { staticClass: "offset-md-0" },
                                                [
                                                  _c("b-form-input", {
                                                    staticClass: "col-sm-2",
                                                    attrs: {
                                                      name: "email",
                                                      state: _vm.emailValidator,
                                                      trim: "",
                                                      type: "email",
                                                      id: "email",
                                                      placeholder:
                                                        "example@example.com",
                                                      required: ""
                                                    },
                                                    model: {
                                                      value: _vm.email,
                                                      callback: function($$v) {
                                                        _vm.email = $$v
                                                      },
                                                      expression: "email"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-row",
                                            { staticClass: "mt-4" },
                                            [
                                              _c(
                                                "b-col",
                                                { staticClass: "col-5" },
                                                [_vm._v("Rating ")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "col-7" },
                                                [
                                                  _c("b-form-rating", {
                                                    staticClass: "exportRating",
                                                    attrs: {
                                                      type: "rating",
                                                      id: "rating",
                                                      "no-border": "",
                                                      required: ""
                                                    },
                                                    model: {
                                                      value: _vm.exportRating,
                                                      callback: function($$v) {
                                                        _vm.exportRating = $$v
                                                      },
                                                      expression: "exportRating"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-row",
                                            { staticClass: "pt-4" },
                                            [
                                              _c(
                                                "b-col",
                                                { staticClass: "col-5" },
                                                [_c("p", [_vm._v("Comment:")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-col",
                                                { staticClass: "col-10" },
                                                [
                                                  _c("b-form-textarea", {
                                                    attrs: {
                                                      type: "comment",
                                                      id: "comment",
                                                      placeholder:
                                                        "Your Comment",
                                                      required: ""
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "mt-4",
                                                  attrs: { type: "submit" }
                                                },
                                                [_vm._v("Submit")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "explore offset-md-2" }, [
            _c(
              "div",
              { staticClass: "col-10", attrs: { id: "contact" } },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "text-left card",
                    attrs: { "text-variant": "white" }
                  },
                  [
                    _c(
                      "b-card-text",
                      [
                        _vm._v("Contact\n                            "),
                        _c(
                          "svg",
                          {
                            staticClass: "h-1 w-1 ml-1 cursor-pointer icon ",
                            attrs: {
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            },
                            on: {
                              click: function($event) {
                                _vm.showContact = !_vm.showContact
                              }
                            }
                          },
                          [
                            _vm.showContact
                              ? _c("path", {
                                  staticClass: "up",
                                  attrs: { d: "M5 15l7-7 7 7" }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.showContact
                              ? _c("path", {
                                  staticClass: "down",
                                  attrs: { d: "M19 9l-7 7-7-7" }
                                })
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("transition", { attrs: { name: "slide-fade" } }, [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showContact,
                                  expression: "showContact"
                                }
                              ],
                              staticClass: "mt-3 text-dark"
                            },
                            [_c("p", [_vm._v(" Contact here")])]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row offset-md-3 exploreSyllabus" }, [
      _c("div", [
        _c("a", { attrs: { href: "#syllabus" } }, [_vm._v("Syllabus")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pl-4" }, [
        _c("a", { attrs: { href: "#resources" } }, [_vm._v("Resources")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pl-4" }, [
        _c("a", { attrs: { href: "#performence" } }, [_vm._v("Performence")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pl-4" }, [
        _c("a", { attrs: { href: "#reviews" } }, [_vm._v("Review & Rate")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pl-4" }, [
        _c("a", { attrs: { href: "#contact" } }, [_vm._v("Contact")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./public/images/eq1.png":
/*!*******************************!*\
  !*** ./public/images/eq1.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/eq1.png?871d33ff13e838d76be41168fcc911bc";

/***/ }),

/***/ "./public/images/eq2.png":
/*!*******************************!*\
  !*** ./public/images/eq2.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/eq2.png?5c55c034e41482f5fdf59592c61721e3";

/***/ }),

/***/ "./resources/js/components/Academics.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Academics.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Academics_vue_vue_type_template_id_7a258871___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Academics.vue?vue&type=template&id=7a258871& */ "./resources/js/components/Academics.vue?vue&type=template&id=7a258871&");
/* harmony import */ var _Academics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Academics.vue?vue&type=script&lang=js& */ "./resources/js/components/Academics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Academics_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Academics.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Academics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Academics_vue_vue_type_template_id_7a258871___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Academics_vue_vue_type_template_id_7a258871___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Academics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Academics.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Academics.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Academics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Academics.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Academics.vue?vue&type=template&id=7a258871&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Academics.vue?vue&type=template&id=7a258871& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_template_id_7a258871___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Academics.vue?vue&type=template&id=7a258871& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Academics.vue?vue&type=template&id=7a258871&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_template_id_7a258871___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academics_vue_vue_type_template_id_7a258871___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/RegulationTab.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/RegulationTab.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegulationTab_vue_vue_type_template_id_62e321b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegulationTab.vue?vue&type=template&id=62e321b0& */ "./resources/js/components/RegulationTab.vue?vue&type=template&id=62e321b0&");
/* harmony import */ var _RegulationTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegulationTab.vue?vue&type=script&lang=js& */ "./resources/js/components/RegulationTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegulationTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegulationTab.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegulationTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegulationTab_vue_vue_type_template_id_62e321b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegulationTab_vue_vue_type_template_id_62e321b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegulationTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegulationTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/RegulationTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegulationTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegulationTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/RegulationTab.vue?vue&type=template&id=62e321b0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/RegulationTab.vue?vue&type=template&id=62e321b0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_template_id_62e321b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegulationTab.vue?vue&type=template&id=62e321b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegulationTab.vue?vue&type=template&id=62e321b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_template_id_62e321b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegulationTab_vue_vue_type_template_id_62e321b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SchemeTab.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/SchemeTab.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchemeTab_vue_vue_type_template_id_4dc445d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchemeTab.vue?vue&type=template&id=4dc445d5& */ "./resources/js/components/SchemeTab.vue?vue&type=template&id=4dc445d5&");
/* harmony import */ var _SchemeTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchemeTab.vue?vue&type=script&lang=js& */ "./resources/js/components/SchemeTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SchemeTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchemeTab.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SchemeTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SchemeTab_vue_vue_type_template_id_4dc445d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SchemeTab_vue_vue_type_template_id_4dc445d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SchemeTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SchemeTab.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/SchemeTab.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SchemeTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SchemeTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/SchemeTab.vue?vue&type=template&id=4dc445d5&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SchemeTab.vue?vue&type=template&id=4dc445d5& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_template_id_4dc445d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SchemeTab.vue?vue&type=template&id=4dc445d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchemeTab.vue?vue&type=template&id=4dc445d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_template_id_4dc445d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchemeTab_vue_vue_type_template_id_4dc445d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SubTab.vue":
/*!********************************************!*\
  !*** ./resources/js/components/SubTab.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubTab_vue_vue_type_template_id_74d42640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubTab.vue?vue&type=template&id=74d42640& */ "./resources/js/components/SubTab.vue?vue&type=template&id=74d42640&");
/* harmony import */ var _SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubTab.vue?vue&type=script&lang=js& */ "./resources/js/components/SubTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubTab.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubTab_vue_vue_type_template_id_74d42640___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubTab_vue_vue_type_template_id_74d42640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SubTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SubTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/SubTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SubTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SubTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/SubTab.vue?vue&type=template&id=74d42640&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/SubTab.vue?vue&type=template&id=74d42640& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_template_id_74d42640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SubTab.vue?vue&type=template&id=74d42640& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubTab.vue?vue&type=template&id=74d42640&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_template_id_74d42640___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubTab_vue_vue_type_template_id_74d42640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);