import { Comment } from '../comment';
import { Injectable } from '@angular/core';

@Injectable()
export class PreProcessService {

    public static toTimelineData(parsedFileContent: Array<Comment>,labels: Array<String>) {

        this.extentDate();
        var data = [];

        labels.forEach((label)=>{
            data.push(parsedFileContent.filter((comment)=>{
                return Date.prototype['yyyy-mm-dd'].call(comment.datetime)===label
            }).length)
        })

        return data;

    }

    public static toTimelineLabel(parsedFileContent: Array<Comment>) {

        this.extentDate();

        var minDate = new Date();
        var maxDate = new Date(0);

        parsedFileContent.forEach((comment) => {
            minDate = (minDate < comment.datetime) ? minDate : comment.datetime;
            maxDate = (maxDate > comment.datetime) ? maxDate : comment.datetime;
        })

        var retVal = [];
        var current = new Date(minDate);

        while (current <= maxDate) {
            retVal.push(Date.prototype['yyyy-mm-dd'].call(current));
            current = Date.prototype['addDays'].call(current, 1);
        }

        return retVal;
    }

    public static toCommentLengthLabel(parsedFileContent: Array<Comment>){

        var minComment = 99999999;
        var maxComment = 0;

        parsedFileContent.forEach((comment) => {
            minComment = (minComment < comment.comment.length) ? minComment : comment.comment.length;
            maxComment = (maxComment > comment.comment.length) ? maxComment : comment.comment.length;
        })

        var retVal = [];
        var current = minComment;

        while (current <= maxComment) {
            retVal.push(current);
            current += 25;
        }

        return retVal;

    }

    public static toCommentLengthData(parsedFileContent: Array<Comment>,labels: Array<number>) {

        var data = [];

        labels[0] = 1 ;

        labels.forEach((label)=>{
            data.push(parsedFileContent.filter((comment)=>{
                return ((comment.comment.length>=label) && (comment.comment.length<(label+50)))
            }).length)
        })

        return data;

    }

    private static extentDate(){
        Date.prototype['yyyy-mm-dd'] = function () {
            var mm = this.getMonth() + 1; // getMonth() is zero-based
            var dd = this.getDate();
            return [this.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
            ].join('-');
        };

        Date.prototype['addDays'] = function (days) {
            var dat = new Date(this.valueOf())
            dat.setDate(dat.getDate() + days);
            return dat;
        }
    }


}

    

    

