<?php
class TEMPService {
    public static function getValue($number, $opc) {
        if ($opc == 'f'){
            return ($number * 9) / 5+32;
        } else {
            return ($number - 32) / 1.8;
        }
    }
}
?>