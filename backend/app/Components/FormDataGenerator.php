<?php


namespace App\Components;


class FormDataGenerator
{
    const SELECT          = 1;
    const SELECT_SEARCH   = 12;
    const SELECT_MULTIPLE = 2;
    const INPUT_TEXT      = 3;
    const INPUT_NUMBER    = 13;
    const TEXTAREA        = 4;
    const CHECKBOX        = 5;
    const RADIO           = 6;
    const SPAN            = 7;
    const DATE            = 8;
    const TIME            = 9;
    const DATETIME        = 10;
    const SLIDER          = 11;
    const CHECKLIST       = 14;

    public static function generateField($field){
        $field_type_id = $field->field_type;
        switch ($field_type_id){
            case self::INPUT_TEXT:
                return [
                    "type" => "input",
                    "inputType" => "text",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "readonly" => $field->is_readonly ?? false,
                    "featured" => false,
                    "required" => $field->is_req ?? false,
                    "disabled" => $field->is_readonly ?? false,
                ];
            case self::INPUT_NUMBER:
                return [
                    "type" => "input",
                    "inputType" => "number",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "readonly" => $field->is_readonly ?? false,
                    "featured" => false,
                    "required" => $field->is_req ?? false,
                    "disabled" => $field->is_readonly ?? false,
                    "validator" => ['number']
                ];
            case self::DATE:
                return [
                    "type" => "input",
                    "inputType" => "date",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "readonly" => $field->is_readonly ?? false,
                    "featured" => false,
                    "required" => $field->is_req ?? false,
                    "disabled" => $field->is_readonly ?? false
                ];
            case self::TIME:
                return [
                    "type" => "input",
                    "inputType" => "time",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "readonly" => $field->is_readonly ?? false,
                    "featured" => false,
                    "required" => $field->is_req ?? false,
                    "disabled" => $field->is_readonly ?? false
                ];
            case self::DATETIME:
                return [
                    "type" => "input",
                    "inputType" => "datetime",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "readonly" => $field->is_readonly ?? false,
                    "featured" => false,
                    "required" => $field->is_req ?? false,
                    "disabled" => $field->is_readonly ?? false
                ];
            case self::TEXTAREA:
                return [
                    "type" => "textArea",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "readonly" => $field->is_readonly ?? false,
                    "featured" => false,
                    "required" => $field->is_req ?? false,
                    "disabled" => $field->is_readonly ?? false,
                    "rows" => 4,
                    "validator" => ['string']
                ];
            case self::CHECKBOX:
                return [
                    "type" => "checkbox",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "default" => false,
                ];
            case self::RADIO:
                return [
                    "type" => "radios",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "required" => $field->is_req ?? false,
                    "values" => [
                        ["value" => 1, "name" => "One"],
                        ["value" => 2, "name" => "Two"]
                    ]
                ];
            case self::SELECT:
                return [
                    "type" => "select",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "required" => $field->is_req ?? false,
                    "selectOptions" => ["noneSelectedText" => "Select One"],
                    "values" => [
                        ["id" => 1, "name" => "One"],
                        ["id" => 2, "name" => "Two"]
                    ]
                ];
            case self::SELECT_MULTIPLE:
                return [
                    "type" => "vueMultiSelect",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "required" => $field->is_req ?? false,
                    "multiSelect" => true,
                    "selectOptions" => [
                        "noneSelectedText" => "Select",
                        "multiple" => true,
                        "trackBy" => "id",
                        "label" => "name",
                        "selectLabel" => "",
                        "searchable" => true,
                        "taggable" => true,
                        "closeOnSelect" => false,
                        "hideSelected" => true,
                        "onSearch" => "",
                    ],
                    "values" => [
                        ["id" => 1, "name" => "One"],
                        ["id" => 2, "name" => "Two"]
                    ]
                ];
            case self::CHECKLIST:
                return [
                    "type" => "checklist",
                    "label" => $field->field_label,
                    "model" => $field->field_name,
                    "required" => $field->is_req ?? false,
                    "multi" => true,
                    "multiSelect" => true,
                    "selectOptions" => ["noneSelectedText" => "Select"],
                    "values" => [
                        "One", "Two"
                    ]
                ];
        }
    }
}
